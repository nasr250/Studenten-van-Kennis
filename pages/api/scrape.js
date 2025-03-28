// /pages/api/scrape.js

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

    const scriptContent = $("script")
      .map((i, el) => $(el).html())
      .get()
      .find((txt) => txt?.includes("window.__sc_hydration"));

    if (!scriptContent) throw new Error("Geen script gevonden");

    const match = scriptContent.match(/window\.__sc_hydration = (.*);/);
    const scData = JSON.parse(match[1]);

    const tracks =
      scData.find((item) => item.hydration?.data?.tracks)?.hydration?.data
        ?.tracks || [];

    const formatted = tracks.map((track) => ({
      title: track.title,
      url: track.permalink_url,
    }));

    res.status(200).json({ tracks: formatted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Kon playlist niet laden" });
  }
}
