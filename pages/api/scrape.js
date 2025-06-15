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

    let formattedTracks = [];

    // === 1. Eerst proberen via __sc_hydration JSON ===
    const scripts = $("script").get();
    let scData = null;

    console.log("Zoeken naar __sc_hydration in scripts...");

    for (const script of scripts) {
      const content = $(script).html();
      if (content && content.includes("window.__sc_hydration")) {
        const match = content.match(/window\.__sc_hydration\s*=\s*(\[.*?\]);/s);
        if (match && match[1]) {
          scData = JSON.parse(match[1]);
          console.log("Gegevens uit __sc_hydration gevonden:", scData);
          break;
        }
      }
    }

    if (scData) {
      // Zoek naar de playlist data
      const playlistData = scData.find(
        (item) =>
          item.hydratable === "playlist" || item.hydratable === "sound-list"
      );

      if (playlistData) {
        console.log("Playlist data gevonden:", playlistData);
      } else {
        console.log("Geen playlist data gevonden in __sc_hydration.");
      }

      const tracks = Array.isArray(playlistData?.data?.tracks)
        ? playlistData.data.tracks
        : playlistData?.data || [];

      console.log("Aantal tracks gevonden in de playlist:", tracks.length);

      // Verbeterde filtering van de tracks:
      formattedTracks = tracks
        .map((track) => {
          // We controleren nu of de track een titel heeft en zo ja, maken we een URL.
          const title = track?.title || "Onbekend"; // Zet een fallback voor lege titels
          const user = track?.user?.permalink || "onbekend";
          const slug = track?.permalink || "";
          const url = track?.permalink_url || `https://soundcloud.com/${user}/${slug}`;

          return { title, url };
        })
        .filter((track) => track?.title); // Filteren op basis van een geldige titel (mag ook "Onbekend" zijn)

      console.log("Aantal tracks na filtering:", formattedTracks.length);
    } else {
      console.log("Geen __sc_hydration data gevonden.");
    }

    if (formattedTracks.length === 0) {
      return res.status(404).json({ error: "Geen tracks gevonden in playlist" });
    }

    // Return de tracks
    res.status(200).json({ tracks: formattedTracks });
  } catch (err) {
    console.error("Scraping error:", err);
    res.status(500).json({ error: "Kon playlist niet laden: " + err.message });
  }
}
