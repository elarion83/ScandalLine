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

// Fonction pour convertir un slug en nom
const slugToName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Fonction pour obtenir le domaine
const getDomain = (req) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;
  return `${protocol}://${host}`;
};

// Fonction pour obtenir la position actuelle
const getCurrentPosition = (scandals, personName) => {
  try {
    // Chercher dans tous les scandales le dernier poste connu pour cette personne
    const personalityScandals = scandals.filter(scandal => 
      scandal.personalities && scandal.personalities.some(p => {
        const name = typeof p === 'string' ? p : p.personality;
        return name === personName;
      })
    );

    if (personalityScandals.length === 0) return '';

    // Prendre le scandale le plus récent
    const latestScandal = personalityScandals.sort((a, b) => 
      new Date(b.startDate) - new Date(a.startDate)
    )[0];

    // Chercher le poste de cette personne dans ce scandale
    const personality = latestScandal.personalities.find(p => {
      const name = typeof p === 'string' ? p : p.personality;
      return name === personName;
    });

    if (typeof personality === 'object' && personality.position) {
      return personality.position;
    }

    // Si pas de poste spécifique, utiliser les positions générales du scandale
    if (latestScandal.positions && latestScandal.positions.length > 0) {
      return latestScandal.positions[0];
    }

    return '';
  } catch (error) {
    console.error('Erreur lors de la recherche de position:', error);
    return '';
  }
};

// Fonction de formatage des euros
const formatEuros = (amount) => {
  if (amount >= 1000000000) {
    return `${(amount / 1000000000).toFixed(1).replace('.', ',')} Md€`;
  } else if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1).replace('.', ',')} M€`;
  } else if (amount >= 1000) {
    return `${Math.round(amount / 1000)} k€`;
  } else {
    return `${Math.round(amount)}€`;
  }
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
      
      console.log(`[DEBUG] Requête reçue: ${req.method} ${pathname}`);

      // Gérer les requêtes OPTIONS pour CORS
      if (req.method === 'OPTIONS') {
        res.writeHead(200, {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        });
        res.end();
        return;
      }

      // Route API OG - Version intégrée simple avec Canvas
      if (pathname === '/api/og') {
        console.log('[DEBUG] Route API OG');
        try {
          const { createCanvas, loadImage } = await import('canvas');
          
          // Récupérer les paramètres
          const name = url.searchParams.get('name') || 'ScandalLine';
          const scandals = url.searchParams.get('scandals') || '0';
          const amount = url.searchParams.get('amount') || '0€';
          const type = url.searchParams.get('type') || 'personality';
          const slug = url.searchParams.get('slug') || '';

          console.log('[DEBUG] Paramètres OG:', { name, scandals, amount, type, slug });

          // Créer le canvas
          const canvas = createCanvas(1200, 630);
          const ctx = canvas.getContext('2d');

          // Récupérer l'URL de la photo de profil
          const photoUrl = slug && type === 'personality' ? findPhotoUrl(slug, perso_Photos) : null;
          console.log('[DEBUG] URL photo trouvée:', photoUrl);

          if (photoUrl) {
            // Charger l'image de profil comme arrière-plan
            try {
              const backgroundImage = await loadImage(photoUrl);
              
              // Calculer les dimensions pour couvrir tout le canvas en gardant le ratio
              const canvasRatio = 1200 / 630;
              const imageRatio = backgroundImage.width / backgroundImage.height;
              
              let drawWidth, drawHeight, offsetX, offsetY;
              
              if (imageRatio > canvasRatio) {
                // L'image est plus large que le canvas (relativement)
                drawHeight = 630;
                drawWidth = 630 * imageRatio;
                offsetX = (1200 - drawWidth) / 2;
                offsetY = 0;
              } else {
                // L'image est plus haute que le canvas (relativement)
                drawWidth = 1200;
                drawHeight = 1200 / imageRatio;
                offsetX = 0;
                offsetY = (630 - drawHeight) / 2;
              }
              
              ctx.drawImage(backgroundImage, offsetX, offsetY, drawWidth, drawHeight);
              
              // Ajouter un overlay sombre pour améliorer la lisibilité du texte
              ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
              ctx.fillRect(0, 0, 1200, 630);
              
              console.log('[DEBUG] Image de profil utilisée comme arrière-plan');
            } catch (error) {
              console.error('[DEBUG] Erreur lors du chargement de l\'image:', error.message);
              // Fallback: Gradient de fond si erreur
              const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
              gradient.addColorStop(0, '#667eea');
              gradient.addColorStop(1, '#764ba2');
              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, 1200, 630);
            }
          } else {
            // Fallback: Gradient de fond si pas d'image
            const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 1200, 630);
          }

          // Logo SK en haut à gauche
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.beginPath();
          ctx.arc(120, 120, 40, 0, 2 * Math.PI);
          ctx.fill();

          // Texte SK
          ctx.fillStyle = 'white';
          ctx.font = 'bold 24px Arial';
          ctx.textAlign = 'center';
          ctx.fillText('SK', 120, 130);

          // Titre ScandalLine
          ctx.font = 'bold 32px Arial';
          ctx.textAlign = 'left';
          ctx.fillText('ScandalLine', 180, 130);

          // Nom de la personnalité au centre
          ctx.font = 'bold 64px Arial';
          ctx.textAlign = 'center';
          ctx.fillStyle = 'white';
          ctx.fillText(name, 600, 280);

          // Sous-titre
          ctx.font = '24px Arial';
          ctx.fillStyle = '#e2e8f0';
          ctx.fillText(type === 'personality' ? 'Personnalité politique' : 'Parti politique', 600, 320);

          // Box des statistiques en bas
          ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(300, 480, 600, 120, 20);
          ctx.fill();
          ctx.stroke();

          // Statistiques - Scandales (gauche)
          ctx.font = 'bold 48px Arial';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#fbbf24';
          ctx.fillText(scandals, 450, 530);
          
          ctx.font = '18px Arial';
          ctx.fillStyle = '#e2e8f0';
          ctx.fillText('Scandales', 450, 560);

          // Séparateur vertical
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(600, 500);
          ctx.lineTo(600, 580);
          ctx.stroke();

          // Statistiques - Montant (droite)
          ctx.font = 'bold 48px Arial';
          ctx.fillStyle = '#ef4444';
          ctx.fillText(amount, 750, 530);
          
          ctx.font = '18px Arial';
          ctx.fillStyle = '#e2e8f0';
          ctx.fillText('Montant concerné', 750, 560);

          // Convertir en JPEG
          const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });

          res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=31536000, immutable'
          });
          res.end(buffer);
          return;
        } catch (error) {
          console.error('Erreur API OG:', error);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(`Erreur génération image OG: ${error.message}`);
          return;
        }
      }

      // Servir index.html pour la racine
      if (pathname === '/') {
        console.log('[DEBUG] Servir page d\'accueil');
        const indexHtml = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf-8');
        res.writeHead(200, { 
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(indexHtml);
        return;
      }

      // Servir les fichiers statiques
      if (pathname.startsWith('/assets/')) {
        console.log('[DEBUG] Servir fichier statique:', pathname);
        const filePath = path.join(__dirname, 'dist', pathname);
        try {
          const content = fs.readFileSync(filePath);
          const ext = path.extname(filePath);
          const contentType = MIME_TYPES[ext] || 'application/octet-stream';
          
          res.writeHead(200, { 
            'Content-Type': contentType,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
          });
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
        console.log(`[DEBUG] Route timeline détectée: slug=${slug}, name=${name}`);

        // Filtrer les scandales pour cette personnalité
        const personalityScandals = allScandals.filter(scandal => 
          scandal.personalities && scandal.personalities.some(p => {
            const personalityName = typeof p === 'string' ? p : p.personality;
            return personalityName === name;
          })
        );
        
        console.log(`[DEBUG] Scandales trouvés pour ${name}: ${personalityScandals.length}`);

        // Si aucun scandale trouvé, rediriger vers la page d'accueil
        if (personalityScandals.length === 0) {
          console.log(`[DEBUG] Aucun scandale trouvé, redirection vers /`);
          res.writeHead(302, { Location: '/' });
          res.end();
          return;
        }

        console.log(`[DEBUG] Génération de la page pour ${name}`);
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
        const totalPrisonYears = personalityScandals.reduce((sum, scandal) => 
          sum + (scandal.prisonYears || 0), 0
        );

        const dateRange = {
          start: Math.min(...personalityScandals.map(s => new Date(s.startDate).getFullYear())),
          end: Math.max(...personalityScandals.map(s => new Date(s.startDate).getFullYear()))
        };

        // Obtenir le poste actuel
        const currentPosition = getCurrentPosition(personalityScandals, name);

        // Générer le titre et la description
        const title = `${name} - Skandal`;

        let description;
        if (dateRange.start === dateRange.end) {
          // Une seule année : "X scandales en ANNEE"
          description = `${personalityScandals.length} scandales en ${dateRange.start}`;
        } else {
          // Années différentes : "X scandales de ANNEEDEBUT à ANNEEFIN"
          description = `${personalityScandals.length} scandales de ${dateRange.start} à ${dateRange.end}`;
        }
        
        // Ajouter le montant total
        if (totalAmount > 0) {
          description += `, pour un montant de ${formatEuros(totalAmount)}`;
        }
        
        // Ajouter les amendes si > 0
        if (totalFines > 0) {
          description += `. ${formatEuros(totalFines)} amendes`;
        }
        
        // Ajouter les années de prison si > 0
        if (totalPrisonYears > 0) {
          const prisonText = totalPrisonYears === 1 ? '1 an de prison' : `${totalPrisonYears} ans de prison`;
          description += ` et ${prisonText}`;
        }

        // Récupérer l'URL de l'image
        const photoUrl = findPhotoUrl(slug, perso_Photos);
        const domain = getDomain(req);
        
        // Debug de la recherche d'image
        console.log('Recherche image pour:', slug);
        console.log('Premier objet photos:', perso_Photos[0]);
        console.log('URL trouvée:', photoUrl);

        // Lire le fichier index.html
        const indexHtml = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf-8');

        // Remplacer les métadonnées dans le HTML
        let modifiedHtml = indexHtml
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${description}"`)
          .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${title}"`)
          .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${description}"`)
          .replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${domain}/timeline/${slug}"`)
          .replace(/<meta property="twitter:title" content=".*?"/, `<meta property="twitter:title" content="${title}"`)
          .replace(/<meta property="twitter:description" content=".*?"/, `<meta property="twitter:description" content="${description}"`)
          // Corriger les chemins des assets pour qu'ils pointent vers le serveur Node.js
          .replace(/src="\/assets\//g, 'src="http://localhost:3000/assets/')
          .replace(/href="\/assets\//g, 'href="http://localhost:3000/assets/');

        // Générer l'URL de l'image OG dynamique
        const ogImageUrl = `${domain}/api/og?name=${encodeURIComponent(name)}&scandals=${personalityScandals.length}&amount=${encodeURIComponent(formatEuros(totalAmount))}&type=personality&slug=${encodeURIComponent(slug)}`;
        
        // Ajouter l'image OG générée dynamiquement
        modifiedHtml = modifiedHtml
          .replace(/<meta property="og:image" content=".*?"/, `<meta property="og:image" content="${ogImageUrl}"`)
          .replace(/<meta property="twitter:image" content=".*?"/, `<meta property="twitter:image" content="${ogImageUrl}"`);
        
        // Ajouter les dimensions de l'image OG
        modifiedHtml = modifiedHtml
          .replace(/<meta property="twitter:description" content=".*?"/, `<meta property="twitter:description" content="${description}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image"`);

        // Ajouter l'attribut alt pour l'image OG
        if (photoUrl) {
          modifiedHtml = modifiedHtml
            .replace(/<meta name="twitter:card" content="summary_large_image"/, `<meta name="twitter:card" content="summary_large_image">
  <meta property="og:image:alt" content="Statistiques de ${name} - ScandalLine"`);
        }

        // Injecter les données initiales dans le HTML
        const initialData = {
          type: 'personality',
          value: name,
          scandals: personalityScandals
        };
        
        const dataScript = `<script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};</script>`;
        modifiedHtml = modifiedHtml.replace('</head>', `${dataScript}\n</head>`);

        console.log(`[DEBUG] Envoi de la page pour ${name}`);
        res.writeHead(200, { 
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(modifiedHtml);
        return;
      }

      // Pour toutes les autres routes, servir index.html (SPA)
      console.log(`[DEBUG] Route non reconnue, servir index.html: ${pathname}`);
      const indexHtml = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexHtml);
    } catch (error) {
      console.error('Erreur serveur:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erreur interne du serveur');
    }
  };
};

// Créer et démarrer le serveur
createHandler().then(handler => {
    const server = http.createServer(handler);
  const PORT = process.env.PORT || 3000;
  
  server.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur le port ${PORT}`);
    console.log(`📍 URL: http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error('❌ Erreur lors du démarrage du serveur:', error);
  process.exit(1);
});