import { getAllScandals } from '../src/data';

// API route handler for timeline pages
export default function handler(req, res) {
  // Get the name parameter from the URL
  const name = req.query.name;
  
  // Get all scandals data
  const scandals = getAllScandals();
  
  // Find the scandal data for this person
  const scandalData = scandals.find(s => s.name.toLowerCase() === name.toLowerCase());
  
  // Default meta tags
  let title = "ScandalLine - La timeline des scandales";
  let description = "Découvrez la chronologie interactive des scandales politiques et médiatiques.";
  let image = "https://scandalline.fr/default-image.jpg"; // Assurez-vous d'avoir une image par défaut
  
  // If we found specific scandal data, use it for meta tags
  if (scandalData) {
    title = `${scandalData.name} - ScandalLine`;
    description = `Découvrez la chronologie des scandales impliquant ${scandalData.name}`;
    image = scandalData.image || image;
  }

  // Send the HTML with dynamic meta tags
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <!-- Primary Meta Tags -->
        <title>${title}</title>
        <meta name="title" content="${title}">
        <meta name="description" content="${description}">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://scandalline.fr/timeline/${name}">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:image" content="${image}">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://scandalline.fr/timeline/${name}">
        <meta property="twitter:title" content="${title}">
        <meta property="twitter:description" content="${description}">
        <meta property="twitter:image" content="${image}">
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  `);
} 