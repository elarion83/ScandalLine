import React, { useState, useEffect } from 'react';
import Timeline from './components/Timeline';
import { TimelineProvider } from './contexts/TimelineContext';
import SplashScreen from './components/SplashScreen';
import allScandals from './data';
import { slugToName } from './utils/shareUtils';
var App = function () {
    // En développement, on n'affiche pas le splash screen
    var _a = useState(import.meta.env.PROD), showSplash = _a[0], setShowSplash = _a[1];
    var _b = useState(null), splashClosedTime = _b[0], setSplashClosedTime = _b[1];
    var handleSplashComplete = function (wantsTutorial) {
        setShowSplash(false);
        setSplashClosedTime(Date.now());
    };
    // Utiliser les données initiales du serveur si elles existent
    var initialData = window.__INITIAL_DATA__;
    useEffect(function () {
        // Gérer la navigation dans l'historique
        var handlePopState = function () {
            var match = window.location.pathname.match(/^\/timeline\/(.+)$/);
            if (match) {
                var slug = match[1];
                var name_1 = slugToName(slug);
                // Ne recharger que si on n'a pas déjà les données pour cette personnalité
                if (!initialData || initialData.value !== name_1) {
                    window.location.href = "/timeline/".concat(slug);
                }
            }
        };
        window.addEventListener('popstate', handlePopState);
        return function () { return window.removeEventListener('popstate', handlePopState); };
    }, [initialData]);
    // Si pas de données initiales, vérifier l'URL
    useEffect(function () {
        if (!initialData) {
            var match = window.location.pathname.match(/^\/timeline\/(.+)$/);
            if (match) {
                var slug = match[1];
                var name_2 = slugToName(slug);
                // Rediriger vers le serveur Node.js pour obtenir les méta tags
                window.location.href = "/timeline/".concat(slug);
            }
        }
    }, [initialData]);
    return (React.createElement(React.Fragment, null,
        showSplash && React.createElement(SplashScreen, { onComplete: handleSplashComplete }),
        React.createElement(TimelineProvider, { initialContext: initialData ? { type: 'personality', value: initialData.value } : undefined },
            React.createElement("div", { className: "h-screen flex flex-col bg-gray-50 dark:bg-gray-900" },
                React.createElement(Timeline, { scandals: (initialData === null || initialData === void 0 ? void 0 : initialData.scandals) || allScandals, splashClosedTime: splashClosedTime })))));
};
export default App;
