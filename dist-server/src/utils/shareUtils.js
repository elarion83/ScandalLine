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
// Get base URL from current location
var getBaseUrl = function () {
    if (typeof window === 'undefined')
        return '';
    return "".concat(window.location.protocol, "//").concat(window.location.host);
};
export var shareUtils = {
    // Copy text to clipboard with fallback
    copyToClipboard: function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var textArea, successful, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(navigator.clipboard && window.isSecureContext)) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.writeText(text)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        textArea = document.createElement('textarea');
                        textArea.value = text;
                        textArea.style.position = 'fixed';
                        textArea.style.left = '-999999px';
                        textArea.style.top = '-999999px';
                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();
                        successful = document.execCommand('copy');
                        document.body.removeChild(textArea);
                        return [2 /*return*/, successful];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error('Failed to copy to clipboard:', error_1);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    generateShareUrl: function (contextualFilter) {
        var baseUrl = getBaseUrl();
        if (!contextualFilter)
            return baseUrl;
        var params = new URLSearchParams();
        params.set('filter', contextualFilter.type);
        params.set('value', contextualFilter.value.toString());
        params.set('label', contextualFilter.label);
        return "".concat(baseUrl, "?").concat(params.toString());
    },
    parseUrlFilter: function () {
        if (typeof window === 'undefined')
            return null;
        var params = new URLSearchParams(window.location.search);
        var filterType = params.get('filter');
        var filterValue = params.get('value');
        var filterLabel = params.get('label');
        if (!filterType || !filterValue || !filterLabel)
            return null;
        if (['personality', 'party', 'status', 'scandalType'].includes(filterType)) {
            return {
                type: filterType,
                value: filterValue,
                label: filterLabel
            };
        }
        return null;
    },
    // Update URL without reload
    updateUrl: function (contextualFilter) {
        var newUrl = this.generateShareUrl(contextualFilter);
        // Only update if URL has changed
        if (newUrl !== window.location.href) {
            window.history.pushState({ filter: contextualFilter }, '', newUrl);
        }
    },
    // Generate title based on context for sharing
    generateShareTitle: function (contextualFilter) {
        if (!contextualFilter) {
            return 'ScandalList : La bibliothèque aux scandales';
        }
        switch (contextualFilter.type) {
            case 'personality':
                return "ScandalList de ".concat(contextualFilter.value);
            case 'party':
                return "ScandalList du ".concat(contextualFilter.value);
            case 'status':
                var statusText = contextualFilter.value === 'convicted' ? 'condamnées' :
                    contextualFilter.value === 'acquitted' ? 'acquittées' :
                        contextualFilter.value === 'ongoing' ? 'en cours' : 'jugées';
                return "ScandalList des affaires ".concat(statusText);
            case 'scandalType':
                var typeText = contextualFilter.value === 'political' ? 'politiques' :
                    contextualFilter.value === 'financial' ? 'financiers' :
                        contextualFilter.value === 'corruption' ? 'de corruption' :
                            String(contextualFilter.value);
                return "ScandalList des scandales ".concat(typeText);
            default:
                return 'ScandalList : La bibliothèque aux scandales';
        }
    },
    // Share via Web Share API with fallback
    shareNative: function (title, text, url) {
        return __awaiter(this, void 0, void 0, function () {
            var fullText, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!navigator.share) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.share({ title: title, text: text, url: url })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        fullText = "".concat(title, "\n\n").concat(text, "\n\n").concat(url);
                        return [4 /*yield*/, this.copyToClipboard(fullText)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        console.error('Error sharing:', error_2);
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
    updateMetaTags: function (name, description) {
        // Update title
        document.title = "Timeline des scandales de ".concat(name, " | ScandalLine");
        // Update meta tags
        var updateMetaTag = function (selector, content) {
            var element = document.querySelector(selector);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };
        // Update OpenGraph tags
        updateMetaTag('meta[property="og:title"]', "Timeline des scandales de ".concat(name, " | ScandalLine"));
        updateMetaTag('meta[property="og:description"]', description);
        updateMetaTag('meta[property="og:url"]', window.location.href);
        // Update Twitter tags
        updateMetaTag('meta[name="twitter:title"]', "Timeline des scandales de ".concat(name, " | ScandalLine"));
        updateMetaTag('meta[name="twitter:description"]', description);
        // Update regular meta description
        updateMetaTag('meta[name="description"]', description);
    },
};
/**
 * Convertit un nom en slug URL-friendly
 * Ex: "Emmanuel Macron" -> "emmanuel-macron"
 */
export var nameToSlug = function (name) {
    return name
        .toLowerCase() // Mettre en minuscules
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Enlever les accents
        .replace(/[^a-z0-9]+/g, '-') // Remplacer les caractères spéciaux par des tirets
        .replace(/^-+|-+$/g, ''); // Enlever les tirets au début et à la fin
};
/**
 * Convertit un slug en nom original
 * Ex: "emmanuel-macron" -> "Emmanuel Macron"
 * Note: Cette fonction fait une conversion approximative car on ne peut pas retrouver
 * la casse et les accents exacts du nom original
 */
export var slugToName = function (slug) {
    return slug
        .split('-')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(' ');
};
