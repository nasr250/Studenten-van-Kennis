process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default async function handler(req, res) {
  const { playlistUrl } = req.query;


  if (!playlistUrl) {
    console.error("playlistUrl ontbreekt");
    return res.status(400).json({ error: "playlistUrl ontbreekt" });
  }

  // Zet hier je access token (verkregen via OAuth, NIET je client secret!)
  const accessToken = process.env.SOUNDCLOUD_ACCESS_TOKEN;
  if (!accessToken) {
    console.error("Geen SoundCloud access token ingesteld.");
    return res.status(500).json({ error: "Geen SoundCloud access token ingesteld." });
  }

  // Resolve playlist naar playlist object
  const resolveUrl = `https://api.soundcloud.com/resolve?url=${encodeURIComponent(playlistUrl)}`;
  try {
    const resolveRes = await fetch(resolveUrl, {
      headers: {
        Authorization: `OAuth ${accessToken}`,
      },
    });

    if (!resolveRes.ok) {
      let errorText = "";
      try {
        errorText = await resolveRes.text();
      } catch (e) {
        errorText = "Kon foutmelding niet uitlezen";
      }
      console.error("SoundCloud API fout:", errorText);
      return res.status(resolveRes.status).json({ error: errorText });
    }

    const playlistData = await resolveRes.json();
    res.status(200).json(playlistData);
  } catch (err) {
    console.error("SoundCloud fetch error:", err);
    res.status(500).json({ error: "SoundCloud API niet bereikbaar", details: err.message });
  }
}