import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllScandals } from './dist-server/data/index.js';
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var PORT = process.env.PORT || 3000;
// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));
// Timeline route with named parameter
app.get('/timeline/:personName', function (req, res) {
    var scandals = getAllScandals();
    var personName = req.params.personName;
    // Find the scandal data for this person
    var scandalData = scandals.find(function (s) { return s.name.toLowerCase() === personName.toLowerCase(); });
    // Default meta tags
    var title = "ScandalLine - La timeline des scandales";
    var description = "Découvrez la chronologie interactive des scandales politiques et médiatiques.";
    var image = "https://scandalline.fr/default-image.jpg";
    // If we found specific scandal data, use it for meta tags
    if (scandalData) {
        title = "".concat(scandalData.name, " - ScandalLine");
        description = "D\u00E9couvrez la chronologie des scandales impliquant ".concat(scandalData.name);
        image = scandalData.image || image;
    }
    // Send index.html with injected meta tags
    res.send("\n    <!DOCTYPE html>\n    <html lang=\"fr\">\n      <head>\n        <meta charset=\"UTF-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        \n        <!-- Primary Meta Tags -->\n        <title>".concat(title, "</title>\n        <meta name=\"title\" content=\"").concat(title, "\">\n        <meta name=\"description\" content=\"").concat(description, "\">\n\n        <!-- Open Graph / Facebook -->\n        <meta property=\"og:type\" content=\"website\">\n        <meta property=\"og:url\" content=\"https://scandalline.fr/timeline/").concat(personName, "\">\n        <meta property=\"og:title\" content=\"").concat(title, "\">\n        <meta property=\"og:description\" content=\"").concat(description, "\">\n        <meta property=\"og:image\" content=\"").concat(image, "\">\n\n        <!-- Twitter -->\n        <meta property=\"twitter:card\" content=\"summary_large_image\">\n        <meta property=\"twitter:url\" content=\"https://scandalline.fr/timeline/").concat(personName, "\">\n        <meta property=\"twitter:title\" content=\"").concat(title, "\">\n        <meta property=\"twitter:description\" content=\"").concat(description, "\">\n        <meta property=\"twitter:image\" content=\"").concat(image, "\">\n\n        <!-- Vite assets -->\n        <script type=\"module\" crossorigin src=\"/assets/index.js\"></script>\n        <link rel=\"stylesheet\" href=\"/assets/index.css\">\n      </head>\n      <body>\n        <div id=\"root\"></div>\n      </body>\n    </html>\n  "));
});
// Catch all other routes
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
// Start server
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
// Export for Vercel
export default app;
