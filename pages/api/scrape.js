
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

    // Zoek eerst naar tracks in playlist data
    const playlistData = scData.find(item => item.hydratable === "playlist" || item.hydratable === "sound-list");
    
    if (!playlistData) {
      console.error("Playlist data niet gevonden");
      return res.status(404).json({ error: "Geen playlist data gevonden" });
    }

    console.log("Gevonden playlist data:", playlistData);

    let tracks;
    if (playlistData.data.tracks) {
      tracks = playlistData.data.tracks;
    } else if (playlistData.data) {
      tracks = playlistData.data;
    } else {
      console.error("Geen tracks gevonden in data");
      return res.status(404).json({ error: "Geen tracks gevonden in playlist" });
    }

    console.log("Aantal gevonden tracks:", tracks.length);

    const formattedTracks = tracks.map(track => {
      console.log("Verwerken track:", track);
      return {
        title: track.title,
        url: track.permalink_url || `https://soundcloud.com/${track.user?.permalink}/${track.permalink}`
      };
    });

    console.log("Verwerkte tracks:", formattedTracks);

    console.log("Found tracks:", tracks);
    res.status(200).json({ tracks });
    
  } catch (err) {
    console.error("Scraping error:", err);
    res.status(500).json({ error: "Kon playlist niet laden: " + err.message });
  }
}
