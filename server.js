const http = require('http');
const fs = require('fs');
const path = require('path');
const { allScandals } = require('./dist-server/data');

// Fonction pour convertir un slug en nom
const slugToName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Fonction pour formater un nombre en euros
const formatEuros = (number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(number);
};

// Fonction pour obtenir le poste le plus récent d'une personnalité
const getCurrentPosition = (scandals, name) => {
  // Trier les scandales par date décroissante
  const sortedScandals = [...scandals].sort((a, b) => 
    new Date(b.startDate) - new Date(a.startDate)
  );

  // Trouver le dernier scandale où la personne a un poste
  for (const scandal of sortedScandals) {
    const personIndex = scandal.personalities.indexOf(name);
    if (personIndex !== -1 && scandal.positions && scandal.positions[personIndex]) {
      return scandal.positions[personIndex];
    }
  }

  return ''; // Retourner une chaîne vide si aucun poste trouvé
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

// Handler principal pour les requêtes
const handler = async (req, res) => {
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

    // Si aucun scandale trouvé, rediriger vers la page d'accueil
    if (personalityScandals.length === 0) {
      res.writeHead(302, { Location: '/' });
      res.end();
      return;
    }

    // Calculer les statistiques
    const totalAmount = personalityScandals.reduce((sum, scandal) => 
      sum + (scandal.amount || 0), 0
    );
    const totalFines = personalityScandals.reduce((sum, scandal) => {
      // Si la personne a une amende spécifique dans sanctions
      const personalSanction = scandal.sanctions?.find(s => s.person === name);
      if (personalSanction?.fine) {
        return sum + personalSanction.fine;
      }
      // Sinon, utiliser l'amende générale du scandale
      return sum + (scandal.fine || 0);
    }, 0);

    const dateRange = {
      start: Math.min(...personalityScandals.map(s => new Date(s.startDate).getFullYear())),
      end: Math.max(...personalityScandals.map(s => new Date(s.startDate).getFullYear()))
    };

    // Obtenir le poste actuel
    const currentPosition = getCurrentPosition(personalityScandals, name);
    const title = currentPosition ? `${name} - ${currentPosition}` : name;

    const indexHtml = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf-8');

    // Construire la description
    let description = `${personalityScandals.length} scandales entre ${dateRange.start} et ${dateRange.end}`;
    if (totalAmount > 0) {
      description += `. Montant total concerné : ${formatEuros(totalAmount)}`;
    }
    if (totalFines > 0) {
      description += `. Amendes : ${formatEuros(totalFines)}`;
    }

    // Injecter les méta tags
    const html = indexHtml
      .replace('</head>',
        `<meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/timeline/${slug}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${description}" />
        </head>`
      )
      .replace('</body>',
        `<script>
          window.__INITIAL_DATA__ = {
            type: 'personality',
            value: "${name}"
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
};

// Créer le serveur si on n'est pas sur Vercel
if (process.env.NODE_ENV !== 'production') {
  const server = http.createServer(handler);
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Exporter le handler pour Vercel
module.exports = handler;
