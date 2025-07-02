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
import React, { useState } from 'react';
import { Share2, Facebook, Twitter, Link as LinkIcon, Check } from 'lucide-react';
export var ShareMenu = function (_a) {
    var scandal = _a.scandal;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(false), copied = _c[0], setCopied = _c[1];
    var handleShare = function (platform) { return __awaiter(void 0, void 0, void 0, function () {
        var url, text, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    url = window.location.href;
                    text = "".concat(scandal.name, " - ").concat(scandal.description);
                    _a = platform;
                    switch (_a) {
                        case 'facebook': return [3 /*break*/, 1];
                        case 'twitter': return [3 /*break*/, 2];
                        case 'copy': return [3 /*break*/, 3];
                        case 'download': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 1:
                    window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(url)), '_blank');
                    return [3 /*break*/, 6];
                case 2:
                    window.open("https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(text), "&url=").concat(encodeURIComponent(url)), '_blank');
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, navigator.clipboard.writeText(url)];
                case 4:
                    _b.sent();
                    setCopied(true);
                    setTimeout(function () { return setCopied(false); }, 2000);
                    return [3 /*break*/, 6];
                case 5:
                    // TODO: Implémenter la génération de PDF/PNG
                    console.log('Download not implemented yet');
                    return [3 /*break*/, 6];
                case 6:
                    setIsOpen(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "relative" },
        React.createElement("button", { onClick: function () { return setIsOpen(!isOpen); }, className: "p-2 rounded-lg hover:bg-white/20 transition-colors", title: "Partager" },
            React.createElement(Share2, { className: "w-5 h-5 text-white" })),
        isOpen && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "fixed inset-0", style: { zIndex: 55 }, onClick: function () { return setIsOpen(false); } }),
            React.createElement("div", { className: "absolute top-full right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden", style: { zIndex: 60 } },
                React.createElement("div", { className: "p-2 space-y-1" },
                    React.createElement("button", { onClick: function () { return handleShare('facebook'); }, className: "w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" },
                        React.createElement(Facebook, { className: "w-4 h-4" }),
                        "Facebook"),
                    React.createElement("button", { onClick: function () { return handleShare('twitter'); }, className: "w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" },
                        React.createElement(Twitter, { className: "w-4 h-4" }),
                        "Twitter"),
                    React.createElement("button", { onClick: function () { return handleShare('copy'); }, className: "w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" },
                        copied ? (React.createElement(Check, { className: "w-4 h-4 text-green-500" })) : (React.createElement(LinkIcon, { className: "w-4 h-4" })),
                        copied ? 'Copié !' : 'Copier le lien')))))));
};
