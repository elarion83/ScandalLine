import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fonction pour trouver l'URL d'une photo
const findPhotoUrl = (slug, photos) => {
  try {
    // Debug de la recherche
    console.log('Recherche photo pour:', slug);
    console.log('Type de photos:', typeof photos);
    console.log('photos est un tableau:', Array.isArray(photos));
    
    // Structure attendue : photos[0][slug].url
    if (Array.isArray(photos) && photos[0] && typeof photos[0] === 'object') {
      const photo = photos[0][slug];
      if (photo && photo.url) {
        console.log('Photo trouvée:', photo.url);
        return photo.url;
      }
    }

    console.log('Photo non trouvée. Structure des photos:', JSON.stringify(photos, null, 2));
    return '';
  } catch (error) {
    console.error('Erreur lors de la recherche de photo:', error);
    return '';
  }
};

// Fonction pour obtenir le domaine complet
const getDomain = (req) => {
  // En prod sur Vercel
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // En local
  return `http://${req.headers.host}`;
};

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
const createHandler = async () => {
  console.log('Initialisation du handler...');
  
  // Charger les données une seule fois
  const { allScandals } = await import('./dist/data/index.js');
  console.log('allScandals chargé avec succès');
  
  const { perso_Photos } = await import('./dist/data/perso_photos.js');
  console.log('perso_Photos chargé avec succès:', typeof perso_Photos);

  // Retourner le handler configuré avec les données
  return async (req, res) => {
    try {
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
          sum + (scandal.moneyAmount || 0), 0
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

        // Récupérer l'URL de l'image
        const photoUrl = findPhotoUrl(slug, perso_Photos);
        const domain = getDomain(req);
        
        // Debug de la recherche d'image
        console.log('Recherche image pour:', slug);
        console.log('Premier objet photos:', perso_Photos[0]);
        console.log('URL trouvée:', photoUrl);

        // Remplacer les métadonnées dans le HTML
        let modifiedHtml = indexHtml
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${description}"`)
          .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${title}"`)
          .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${description}"`)
          .replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${domain}/timeline/${slug}"`)
          .replace(/<meta property="twitter:title" content=".*?"/, `<meta property="twitter:title" content="${title}"`)
          .replace(/<meta property="twitter:description" content=".*?"/, `<meta property="twitter:description" content="${description}"`);

        // Ajouter l'image si elle existe
        if (photoUrl) {
          modifiedHtml = modifiedHtml
            .replace(/<meta property="og:image" content=".*?"/, `<meta property="og:image" content="${photoUrl}"`)
            .replace(/<meta property="twitter:image" content=".*?"/, `<meta property="twitter:image" content="${photoUrl}"`);
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(modifiedHtml);
        return;
      }

      // Pour toutes les autres routes, servir index.html (SPA)
      const indexHtml = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexHtml);

    } catch (error) {
      console.error('Erreur dans le handler:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  };
};

// Démarrer le serveur
const startServer = async () => {
  try {
    const handler = await createHandler();
    
    const server = http.createServer(handler);
    const port = process.env.PORT || 3000;
    
    server.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });
  } catch (error) {
    console.error('Erreur lors du démarrage du serveur:', error);
  }
};

// Démarrer le serveur si ce fichier est exécuté directement
if (import.meta.url === `file://${process.argv[1]}`) {
  startServer();
}

// Export pour Vercel
export default async function handler(req, res) {
  const serverHandler = await createHandler();
  return serverHandler(req, res);
}