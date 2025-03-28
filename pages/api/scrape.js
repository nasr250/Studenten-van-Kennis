
import axios from "axios";
import { load } from "cheerio";

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Geen URL meegegeven" });
  }

  try {
    const { data: html } = await axios.get(url);
    const $ = load(html);
    
    // Find all script tags and log their content
    const scripts = $("script").get();
    let scData = null;
    
    for (const script of scripts) {
      const content = $(script).html();
      if (content && content.includes("window.__sc_hydration")) {
        try {
          const match = content.match(/window\.__sc_hydration\s*=\s*(\[.*?\]);/s);
          if (match && match[1]) {
            scData = JSON.parse(match[1]);
            break;
          }
        } catch (parseError) {
          console.error("Error parsing script content:", parseError);
        }
      }
    }

    if (!scData) {
      console.error("No SoundCloud data found in scripts");
      return res.status(404).json({ error: "Geen SoundCloud data gevonden" });
    }

    const playlistData = scData.find(item => item.hydratable === "playlist");
    
    if (!playlistData || !playlistData.data || !playlistData.data.tracks) {
      console.error("No tracks found in playlist data");
      return res.status(404).json({ error: "Geen tracks gevonden in playlist" });
    }

    const tracks = playlistData.data.tracks.map(track => ({
      title: track.title,
      url: track.permalink_url
    }));

    console.log("Found tracks:", tracks);
    res.status(200).json({ tracks });
    
  } catch (err) {
    console.error("Scraping error:", err);
    res.status(500).json({ error: "Kon playlist niet laden: " + err.message });
  }
}
