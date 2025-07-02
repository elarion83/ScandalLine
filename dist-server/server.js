var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';
import { allScandals } from './data/index';
import { filterTimelineBy } from './utils/contextualFilters';
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var app = express();
app.use(compression());
// Servir les fichiers statiques du build Vite
app.use(express.static(join(__dirname, '..', 'dist')));
// Route pour les timelines de personnalités
app.get('/timeline/personality/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, contextualFilter, filteredScandals, totalMoney, dateRange, indexHtml, html, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = req.params.name;
                contextualFilter = {
                    type: 'personality',
                    value: name,
                    label: name // Le label est le même que le nom pour les personnalités
                };
                filteredScandals = filterTimelineBy(allScandals, contextualFilter);
                if (filteredScandals.length === 0) {
                    return [2 /*return*/, res.redirect('/')];
                }
                totalMoney = filteredScandals.reduce(function (sum, scandal) { return sum + (scandal.amount || 0); }, 0);
                dateRange = {
                    start: Math.min.apply(Math, filteredScandals.map(function (s) { return new Date(s.startDate).getFullYear(); })),
                    end: Math.max.apply(Math, filteredScandals.map(function (s) { return new Date(s.startDate).getFullYear(); }))
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fs.readFile(join(__dirname, '..', 'dist', 'index.html'), 'utf-8')];
            case 2:
                indexHtml = _a.sent();
                html = indexHtml
                    .replace('</head>', "<meta property=\"og:title\" content=\"Page Skandalz de ".concat(name, "\" />\n        <meta property=\"og:description\" content=\"D\u00E9couvrez les ").concat(filteredScandals.length, " scandales impliquant ").concat(name, " entre ").concat(dateRange.start, " et ").concat(dateRange.end, ". Montant total : ").concat(totalMoney.toLocaleString('fr-FR'), "\u20AC\" />\n        <meta property=\"og:type\" content=\"website\" />\n        <meta property=\"og:url\" content=\"https://scandalline.fr/timeline/personality/").concat(encodeURIComponent(name), "\" />\n        <meta name=\"twitter:card\" content=\"summary_large_image\" />\n        <meta name=\"twitter:title\" content=\"Page Skandalz de ").concat(name, "\" />\n        <meta name=\"twitter:description\" content=\"D\u00E9couvrez les ").concat(filteredScandals.length, " scandales impliquant ").concat(name, " entre ").concat(dateRange.start, " et ").concat(dateRange.end, ". Montant total : ").concat(totalMoney.toLocaleString('fr-FR'), "\u20AC\" />\n        </head>"))
                    .replace('</body>', "<script>\n          window.__INITIAL_DATA__ = {\n            type: 'personality',\n            value: '".concat(name, "',\n            scandals: ").concat(JSON.stringify(filteredScandals), "\n          };\n        </script>\n        </body>"));
                res.send(html);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error reading index.html:', error_1);
                res.status(500).send('Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Toutes les autres routes servent index.html
app.get('*', function (req, res) {
    res.sendFile(join(__dirname, '..', 'dist', 'index.html'));
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
