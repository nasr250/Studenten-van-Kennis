const puppeteer = require('puppeteer');

async function scrapeSoundCloudPlaylist(playlistUrl) {
  // Start de browser en maak een nieuwe pagina
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Ga naar de opgegeven SoundCloud playlist URL
  await page.goto(playlistUrl, { waitUntil: 'domcontentloaded' });

  // Wacht totdat de tracklijst geladen is (specifieke selector afhankelijk van de pagina)
  await page.waitForSelector('ul.trackList__list');

  // Haal de trackdata op
  const tracks = await page.evaluate(() => {
    // Zoek naar de track items
    const trackElements = document.querySelectorAll('ul.trackList__list > li.trackList__item');

    // Verzamel de titel en URL van elke track
    const trackData = [];
    trackElements.forEach((track) => {
      const titleElement = track.querySelector('.trackItem__trackTitle');
      const urlElement = track.querySelector('a');
      if (titleElement && urlElement) {
        trackData.push({
          title: titleElement.innerText.trim(),
          url: `https://soundcloud.com${urlElement.getAttribute('href')}`,
        });
      }
    });

    return trackData; // Retourneer de verzamelde trackdata
  });

  // Sluit de browser
  await browser.close();

  // Geef de trackdata terug
  return tracks;
}

// Dit is de functie die je kunt aanroepen in je API route
module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Geen URL meegegeven" });
  }

  try {
    // Roep de scraping functie aan om de tracks op te halen
    const tracks = await scrapeSoundCloudPlaylist(url);

    // Als er geen tracks zijn gevonden
    if (!tracks.length) {
      return res.status(404).json({ error: "Geen tracks gevonden in playlist" });
    }

    // Return de tracks als JSON
    res.status(200).json({ tracks });
  }
