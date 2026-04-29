const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression for better performance
app.use(compression());

// Path to the Next.js exported static files.
// When 'output: "export"' is set in next.config.ts, Next.js generates static files in the 'out' directory.
const staticDir = path.join(__dirname, '..', 'out');

// Check if the 'out' directory exists
if (!fs.existsSync(staticDir)) {
  console.error('\n[ GREŠKA ] "out" direktorij ne postoji!');
  console.error('Molimo vas pokrenite "npm run build" (uz "output: export" u next.config.ts) da bi Next.js generisao statičnu stranicu prije pokretanja ovog servera.\n');
  process.exit(1);
}

// Serve static assets with strict caching (CSS, JS, Images)
app.use('/_next', express.static(path.join(staticDir, '_next'), {
  maxAge: '1y',
  immutable: true,
}));

// Serve other static files (HTML, etc.) without caching issues
app.use(express.static(staticDir, {
  extensions: ['html'],
  maxAge: '1d'
}));

// Fallback to index.html for 404 (Single Page App behavior, though here we have multiple generated pages)
app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, '404.html'), (err) => {
    if (err) {
      res.redirect('/');
    }
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 BOMS-expo produkcijski server uspješno pokrenut!`);
  console.log(`📡 Slušam na portu: http://localhost:${PORT}`);
  console.log(`📁 Poslužujem statičke fajlove iz direktorija: ${staticDir}\n`);
});
