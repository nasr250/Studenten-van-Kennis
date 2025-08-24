import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { lessenreeks } = req.body;
    if (!lessenreeks) return res.status(400).json({ error: 'missing lessenreeks' });

    // Bouw HTML-template — laad Quill CSS en een betrouwbare Arabic-font
    const html = `
      <!doctype html>
      <html lang="nl">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <!-- Quill styles (houd opmaak) -->
        <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
        <!-- Google Noto Arabic font (zorgt voor correcte Arabic rendering) -->
        <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Noto Naskh Arabic', 'Arial', sans-serif; padding: 24px; color: #111; }
          h1 { font-size: 22px; margin-bottom: 12px; }
          h2 { font-size: 18px; margin-top: 18px; margin-bottom: 8px; }
          .les { margin-bottom: 18px; }
          .notitie { margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #eee; }
          .meta { color: #666; font-size: 12px; margin-top:6px; }
          /* Zorg dat Quill content weergave gelijk is aan edit view */
          .ql-editor { white-space: normal; }
          /* Force auto direction per notitie */
          .rtl { direction: rtl; text-align: right; }
          .ltr { direction: ltr; text-align: left; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(lessenreeks.titel || 'Notities')}</h1>
        ${ (lessenreeks.lessen || []).map(les => `
          <div class="les">
            <h2>Les ${escapeHtml(String(les.volgorde_nummer || ''))}: ${escapeHtml(les.titel || '')}</h2>
            ${ (les.notities || []).map(n => `
              <div class="notitie">
                <div class="${guessDirectionClass(n.notitie)}">${n.notitie}</div>
                <div class="meta">${new Date(n.created_at || Date.now()).toLocaleString()}</div>
              </div>
            `).join('') }
          </div>
        `).join('') }
      </body>
      </html>
    `;

    // Launch puppeteer
    const browser = await puppeteer.launch({
      args: ['--no-sandbox','--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // PDF opties
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' }
    });

    await browser.close();

    // Zorg dat we een echte Buffer sturen en correcte headers
    const filename = `${sanitizeFilename(lessenreeks.titel || 'notities')}.pdf`;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', Buffer.byteLength(pdfBuffer));

    return res.status(200).send(Buffer.from(pdfBuffer));
  } catch (err) {
    console.error('PDF generation error', err);
    return res.status(500).json({ error: 'PDF generatie mislukt' });
  }
}

// Helpers
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function sanitizeFilename(name='file') {
  return name.replace(/[^a-z0-9\-_\s\.]/gi,'').trim() || 'notities';
}
function guessDirectionClass(html = '') {
  // eenvoudige check: als er arabische letters zit -> rtl
  return /[\u0600-\u06FF\u0750-\u077F]/.test(html) ? 'rtl' : 'ltr';
}