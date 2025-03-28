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

    const scripts = $("script").get();
    let scData = null;

    for (const script of scripts) {
      const content = $(script).html();
      if (content && content.includes("window.__sc_hydration")) {
        const match = content.match(/window\.__sc_hydration\s*=\s*(\[.*?\]);/s);
        if (match && match[1]) {
          scData = JSON.parse(match[1]);
          break;
        }
      }
    }

    if (!scData) {
      return res.status(404).json({ error: "Geen SoundCloud data gevonden" });
    }

    const playlistData = scData.find(
      (item) =>
        item.hydratable === "playlist" || item.hydratable === "sound-list",
    );

    if (!playlistData || !playlistData.data) {
      return res.status(404).json({ error: "Geen playlist data gevonden" });
    }

    // Soms zijn tracks direct in data.tracks, soms als array
    const tracks = Array.isArray(playlistData.data.tracks)
      ? playlistData.data.tracks
      : playlistData.data;

    // Filter alleen geldige tracks (met title)
    const formattedTracks = tracks
      .filter((track) => track?.title)
      .map((track) => {
        const title = track.title;
        const user = track.user?.permalink || "onbekend";
        const slug = track.permalink || "";
        const url =
          track.permalink_url || `https://soundcloud.com/${user}/${slug}`;

        return { title, url };
      });

    if (formattedTracks.length === 0) {
      return res.status(404).json({ error: "Geen bruikbare tracks gevonden" });
    }

    return res.status(200).json({ tracks: formattedTracks });
  } catch (err) {
    console.error("Scraping error:", err);
    res.status(500).json({ error: "Kon playlist niet laden: " + err.message });
  }
}
