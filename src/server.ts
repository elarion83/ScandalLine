import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';
import { allScandals } from './data/index';
import { filterTimelineBy } from './utils/contextualFilters';
import type { Scandal, ContextualFilter } from './types/scandal';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(compression());

// Servir les fichiers statiques du build Vite
app.use(express.static(join(__dirname, '..', 'dist')));

// Route pour les timelines de personnalités
app.get('/timeline/personality/:name', async (req, res) => {
  const { name } = req.params;
  
  // Filtrer les scandales pour cette personnalité
  const contextualFilter: ContextualFilter = {
    type: 'personality',
    value: name,
    label: name // Le label est le même que le nom pour les personnalités
  };

  const filteredScandals = filterTimelineBy(allScandals, contextualFilter);

  if (filteredScandals.length === 0) {
    return res.redirect('/');
  }

  // Calculer quelques statistiques pour les méta tags
  const totalMoney = filteredScandals.reduce((sum, scandal) => sum + (scandal.amount || 0), 0);
  const dateRange = {
    start: Math.min(...filteredScandals.map(s => new Date(s.startDate).getFullYear())),
    end: Math.max(...filteredScandals.map(s => new Date(s.startDate).getFullYear()))
  };

  try {
    // Lire le fichier index.html du build
    const indexHtml = await fs.readFile(join(__dirname, '..', 'dist', 'index.html'), 'utf-8');

    // Injecter les méta tags
    const html = indexHtml
      .replace('</head>',
        `<meta property="og:title" content="Timeline des scandales de ${name} | ScandalLine" />
        <meta property="og:description" content="Découvrez les ${filteredScandals.length} scandales impliquant ${name} entre ${dateRange.start} et ${dateRange.end}. Montant total : ${totalMoney.toLocaleString('fr-FR')}€" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scandalline.fr/timeline/personality/${encodeURIComponent(name)}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Timeline des scandales de ${name} | ScandalLine" />
        <meta name="twitter:description" content="Découvrez les ${filteredScandals.length} scandales impliquant ${name} entre ${dateRange.start} et ${dateRange.end}. Montant total : ${totalMoney.toLocaleString('fr-FR')}€" />
        </head>`
      )
      .replace('</body>',
        `<script>
          window.__INITIAL_DATA__ = {
            type: 'personality',
            value: '${name}',
            scandals: ${JSON.stringify(filteredScandals)}
          };
        </script>
        </body>`
      );

    res.send(html);
  } catch (error) {
    console.error('Error reading index.html:', error);
    res.status(500).send('Server Error');
  }
});

// Toutes les autres routes servent index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 