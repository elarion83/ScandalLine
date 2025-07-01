import fs from 'fs';
import path from 'path';
import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Import scandals data
import { scandals2000_2001 } from './src/data/scandals2000-2001';
import { scandals2002_2003 } from './src/data/scandals2002-2003';
import { scandals2004_2005 } from './src/data/scandals2004-2005';
import { scandals2006_2007 } from './src/data/scandals2006-2007';
import { scandals2008_2009 } from './src/data/scandals2008-2009';
import { scandals2010_2011 } from './src/data/scandals2010-2011';
import { scandals2012_2013 } from './src/data/scandals2012-2013';
import { scandals2014_2015 } from './src/data/scandals2014-2015';
import { scandals2016_2017 } from './src/data/scandals2016-2017';
import { scandals2018_2019 } from './src/data/scandals2018-2019';
import { scandals2020_2021 } from './src/data/scandals2020-2021';
import { scandals2022_2023 } from './src/data/scandals2022-2023';
import { scandals2024_2025 } from './src/data/scandals2024-2025';
// Merge all scandals
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
// Function to convert name to slug
const nameToSlug = (name) => {
    return name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
};
const app = express();
// Enable compression
app.use(compression());
// Serve static files
app.use(express.static('dist'));
// Handle timeline routes
app.get('/timeline/:name', (req, res) => {
    const name = req.params.name;
    const slug = name;
    // Find scandals for this personality
    const personalityScandals = allScandals.filter(scandal => scandal.personalities?.some(person => nameToSlug(person) === slug));
    if (personalityScandals.length === 0) {
        console.log(`No scandals found for ${name}`);
        return res.redirect('/');
    }
    console.log(`Found ${personalityScandals.length} scandals for ${name}`);
    // Read index.html
    const indexHtml = fs.readFileSync(path.resolve(__dirname, 'dist', 'index.html'), 'utf-8');
    // Calculate description
    const description = `${name} est impliqué(e) dans ${personalityScandals.length} affaire${personalityScandals.length > 1 ? 's' : ''}`;
    // Inject meta tags
    const html = indexHtml
        .replace('<title>ScandalLine</title>', `<title>Timeline des scandales de ${name} | ScandalLine</title>`)
        .replace('</head>', `<meta property="og:title" content="Timeline des scandales de ${name} | ScandalLine" />
      <meta property="og:description" content="${description}" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/timeline/${slug}" />
      <meta property="og:site_name" content="ScandalLine" />
      <meta property="og:locale" content="fr_FR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Timeline des scandales de ${name} | ScandalLine" />
      <meta name="twitter:description" content="${description}" />
      <meta name="description" content="${description}" />
      </head>`)
        .replace('</body>', `<script>
        window.__INITIAL_DATA__ = {
          type: 'personality',
          value: "${name}",
          scandals: ${JSON.stringify(personalityScandals)}
        };
      </script>
      </body>`);
    res.send(html);
});
// Handle all other routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
