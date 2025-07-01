const express = require('express');
const path = require('path');
const compression = require('compression');
const fs = require('fs');
const { findScandalsForPersonality } = require('./dist-server/utils/scandalUtils');

const app = express();
app.use(compression());

// Serve static files from the dist directory
app.use(express.static('dist'));

// Read the index.html file once at startup
const indexHtml = fs.readFileSync(
  path.join(__dirname, 'dist', 'index.html'),
  'utf-8'
);

// Handle timeline routes
const handleTimelineRoute = (req, res) => {
  const slug = req.params.name;
  const name = decodeURIComponent(slug);
  
  // Find scandals for this personality
  const personalityScandals = findScandalsForPersonality(name);
  console.log(`Found ${personalityScandals.length} scandals for ${name}`);

  if (personalityScandals.length === 0) {
    return res.redirect('/');
  }

  // Calculate description
  const description = `${name} est impliqué(e) dans ${personalityScandals.length} affaire${personalityScandals.length > 1 ? 's' : ''}`;

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

  res.send(html);
};

// Timeline route
app.get('/timeline/:name', handleTimelineRoute);

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// For Vercel
module.exports = app;
