const http = require('http');
const fs = require('fs');
const path = require('path');

// Importer les données des scandales
const scandals2000_2001 = require('./dist-server/data/scandals2000-2001.js').scandals2000_2001;
const scandals2002_2003 = require('./dist-server/data/scandals2002-2003.js').scandals2002_2003;
const scandals2004_2005 = require('./dist-server/data/scandals2004-2005.js').scandals2004_2005;
const scandals2006_2007 = require('./dist-server/data/scandals2006-2007.js').scandals2006_2007;
const scandals2008_2009 = require('./dist-server/data/scandals2008-2009.js').scandals2008_2009;
const scandals2010_2011 = require('./dist-server/data/scandals2010-2011.js').scandals2010_2011;
const scandals2012_2013 = require('./dist-server/data/scandals2012-2013.js').scandals2012_2013;
const scandals2014_2015 = require('./dist-server/data/scandals2014-2015.js').scandals2014_2015;
const scandals2016_2017 = require('./dist-server/data/scandals2016-2017.js').scandals2016_2017;
const scandals2018_2019 = require('./dist-server/data/scandals2018-2019.js').scandals2018_2019;
const scandals2020_2021 = require('./dist-server/data/scandals2020-2021.js').scandals2020_2021;
const scandals2022_2023 = require('./dist-server/data/scandals2022-2023.js').scandals2022_2023;
const scandals2024_2025 = require('./dist-server/data/scandals2024-2025.js').scandals2024_2025;

// Fusionner tous les scandales
const allScandals = [
  ...scandals2000_2001,
  ...scandals2002_2003,
  ...scandals2004_2005,
  ...scandals2006_2007,
  ...scandals2008_2009,
  ...scandals2010_2011,
  ...scandals2012_2013,
  ...scandals2014_2015,
  ...scandals2016_2017,
  ...scandals2018_2019,
  ...scandals2020_2021,
  ...scandals2022_2023,
  ...scandals2024_2025
];

// Fonction pour convertir un slug en nom
const slugToName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Fonction pour formater un montant en euros
const formatMoney = (amount) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(amount);
};

// Map des types MIME
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  // Servir index.html pour la racine
  if (pathname === '/') {
    const indexHtml = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtml);
    return;
  }

  // Servir les fichiers statiques
  if (pathname.startsWith('/assets/')) {
    const filePath = path.join(__dirname, 'dist', pathname);
    try {
      const content = fs.readFileSync(filePath);
      const ext = path.extname(filePath);
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
      return;
    } catch (err) {
      console.error('Error serving static file:', err);
      res.writeHead(404);
      res.end('Not found');
      return;
    }
  }

  // Route pour les timelines de personnalités
  const match = pathname.match(/^\/timeline\/(.+)$/);
  if (match) {
    const slug = match[1];
    const name = slugToName(slug);

    // Filtrer les scandales pour cette personnalité
    const personalityScandals = allScandals.filter(scandal => 
      scandal.personalities && scandal.personalities.includes(name)
    );

    console.log(`Found ${personalityScandals.length} scandals for ${name}`);

    // Si aucun scandale trouvé, rediriger vers la page d'accueil
    if (personalityScandals.length === 0) {
      res.writeHead(302, { Location: '/' });
      res.end();
      return;
    }

    // Calculer quelques statistiques
    const stats = {
      count: personalityScandals.length,
      totalAmount: personalityScandals.reduce((sum, s) => sum + (s.moneyAmount || 0), 0),
      dateRange: {
        start: Math.min(...personalityScandals.map(s => new Date(s.startDate).getFullYear())),
        end: Math.max(...personalityScandals.map(s => new Date(s.startDate).getFullYear()))
      },
      latestPosition: personalityScandals
        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))[0]
        ?.positions?.find(p => p.includes(name)) || ''
    };

    const indexHtml = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf-8');

    // Construire la description
    const description = `${name}, ${stats.latestPosition}. Impliqué(e) dans ${stats.count} affaires entre ${stats.dateRange.start} et ${stats.dateRange.end}${stats.totalAmount > 0 ? `. Montant total concerné : ${formatMoney(stats.totalAmount)}` : ''}.`;

    // Injecter les méta tags
    const html = indexHtml
      .replace('<title>ScandalLine</title>',
        `<title>Timeline des scandales de ${name} | ScandalLine</title>`
      )
      .replace('</head>',
        `<meta property="og:title" content="Timeline des scandales de ${name} | ScandalLine" />
        <meta property="og:description" content="${description}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/timeline/${slug}" />
        <meta property="og:site_name" content="ScandalLine" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Timeline des scandales de ${name} | ScandalLine" />
        <meta name="twitter:description" content="${description}" />
        <meta name="description" content="${description}" />
        </head>`
      )
      .replace('</body>',
        `<script>
          window.__INITIAL_DATA__ = {
            type: 'personality',
            value: "${name}",
            scandals: ${JSON.stringify(personalityScandals)}
          };
        </script>
        </body>`
      );

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    return;
  }

  // Route par défaut : servir index.html
  try {
    const indexHtml = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtml);
  } catch (err) {
    console.error('Error serving index.html:', err);
    res.writeHead(500);
    res.end('Server Error');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
