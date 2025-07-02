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
import { Share2, Facebook, Twitter, Link2 } from 'lucide-react';
import { formatLargeNumber } from '../utils/scandalUtils';
import { shareUtils } from '../utils/shareUtils';
var ShareTimeline = function (_a) {
    var scandals = _a.scandals, contextualFilter = _a.contextualFilter;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(false), copied = _c[0], setCopied = _c[1];
    // Calculate cumulative statistics for all scandals
    var stats = {
        count: scandals.length,
        totalMoney: scandals.reduce(function (sum, s) { return sum + (s.moneyAmount || 0); }, 0),
        totalFines: scandals.reduce(function (sum, s) { return sum + (s.fine || 0); }, 0),
        totalPrison: scandals.reduce(function (sum, s) { return sum + (s.prisonYears || 0); }, 0),
        mostAffectedParty: (function () {
            var byParty = scandals.reduce(function (acc, scandal) {
                if (scandal.politicalParty) {
                    acc[scandal.politicalParty] = (acc[scandal.politicalParty] || 0) + 1;
                }
                return acc;
            }, {});
            if (Object.keys(byParty).length === 0)
                return null;
            var sorted = Object.entries(byParty).sort(function (_a, _b) {
                var a = _a[1];
                var b = _b[1];
                return b - a;
            });
            return { party: sorted[0][0], count: sorted[0][1] };
        })()
    };
    // Generate share description with the 4 main statistics
    var getShareDescription = function () {
        var description = "\uD83D\uDCCA ".concat(stats.count, " affaire").concat(stats.count > 1 ? 's' : '', " recens\u00E9e").concat(stats.count > 1 ? 's' : '');
        if (stats.totalMoney > 0) {
            description += " \u2022 \uD83D\uDCB0 ".concat(formatLargeNumber(stats.totalMoney), " concern\u00E9s");
        }
        if (stats.totalFines > 0) {
            description += " \u2022 \uD83C\uDFDB\uFE0F ".concat(formatLargeNumber(stats.totalFines), " d'amendes");
        }
        if (stats.totalPrison > 0) {
            description += " \u2022 \u2696\uFE0F ".concat(stats.totalPrison, " an").concat(stats.totalPrison > 1 ? 's' : '', " de prison");
        }
        // Only show most affected party if not filtering by a specific personality
        if (stats.mostAffectedParty && (contextualFilter === null || contextualFilter === void 0 ? void 0 : contextualFilter.type) !== 'personality') {
            description += " \u2022 \uD83C\uDFAF ".concat(stats.mostAffectedParty.party, " le plus concern\u00E9");
        }
        return description;
    };
    // Handle copy to clipboard with user feedback
    var handleCopy = function (text) { return __awaiter(void 0, void 0, void 0, function () {
        var success;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, shareUtils.copyToClipboard(text)];
                case 1:
                    success = _a.sent();
                    if (success) {
                        setCopied(true);
                        setTimeout(function () { return setCopied(false); }, 2000);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    // Share functions for different platforms
    var shareToTwitter = function () {
        var title = shareUtils.generateShareTitle(contextualFilter);
        var description = getShareDescription();
        var url = shareUtils.generateShareUrl(contextualFilter);
        var text = encodeURIComponent("".concat(title, "\n\n").concat(description));
        var encodedUrl = encodeURIComponent(url);
        window.open("https://twitter.com/intent/tweet?text=".concat(text, "&url=").concat(encodedUrl), '_blank');
    };
    var shareToFacebook = function () {
        var url = encodeURIComponent(shareUtils.generateShareUrl(contextualFilter));
        window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(url), '_blank');
    };
    var shareNative = function () { return __awaiter(void 0, void 0, void 0, function () {
        var title, description, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    title = shareUtils.generateShareTitle(contextualFilter);
                    description = getShareDescription();
                    url = shareUtils.generateShareUrl(contextualFilter);
                    return [4 /*yield*/, shareUtils.shareNative(title, description, url)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    // Generate full share text
    var getFullShareText = function () {
        var title = shareUtils.generateShareTitle(contextualFilter);
        var description = getShareDescription();
        var url = shareUtils.generateShareUrl(contextualFilter);
        return "".concat(title, "\n\n").concat(description, "\n\n").concat(url);
    };
    return (React.createElement("div", { className: "relative" },
        React.createElement("button", { onClick: function () { return setIsOpen(!isOpen); }, className: "flex items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium", title: "Partager cette timeline" },
            React.createElement(Share2, { className: "w-4 h-4" }),
            React.createElement("span", { className: "hidden sm:inline" }, "Partager")),
        isOpen && (React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4" },
            React.createElement("div", { className: "bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6" },
                React.createElement("div", { className: "flex items-center justify-between mb-4" },
                    React.createElement("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white" }, "Partager la timeline"),
                    React.createElement("button", { onClick: function () { return setIsOpen(false); }, className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl", "aria-label": "Fermer" }, "\u2715")),
                React.createElement("div", { className: "bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4" },
                    React.createElement("h4", { className: "font-medium text-gray-900 dark:text-white mb-2" }, shareUtils.generateShareTitle(contextualFilter)),
                    React.createElement("p", { className: "text-sm text-gray-600 dark:text-gray-300" }, getShareDescription())),
                React.createElement("div", { className: "space-y-3" },
                    React.createElement("button", { onClick: function () { return handleCopy(shareUtils.generateShareUrl(contextualFilter)); }, className: "w-full flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors" },
                        React.createElement(Link2, { className: "w-5 h-5 text-gray-600 dark:text-gray-400" }),
                        React.createElement("span", { className: "text-gray-700 dark:text-gray-300 font-medium" }, copied ? '✓ Copié !' : 'Copier le lien')),
                    React.createElement("div", { className: "flex gap-2" },
                        React.createElement("button", { onClick: shareToTwitter, className: "flex-1 flex items-center justify-center gap-2 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors" },
                            React.createElement(Twitter, { className: "w-4 h-4" }),
                            React.createElement("span", { className: "text-sm font-medium" }, "Twitter")),
                        React.createElement("button", { onClick: shareToFacebook, className: "flex-1 flex items-center justify-center gap-2 p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors" },
                            React.createElement(Facebook, { className: "w-4 h-4" }),
                            React.createElement("span", { className: "text-sm font-medium" }, "Facebook")))),
                React.createElement("p", { className: "text-xs text-gray-500 dark:text-gray-400 mt-4 text-center" }, "Le lien partag\u00E9 inclut les filtres actuels et permettra de recr\u00E9er cette vue"))))));
};
export default ShareTimeline;
