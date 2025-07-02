import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
var ScrollHint = function (_a) {
    var _b = _a.show, show = _b === void 0 ? true : _b, _c = _a.scrollPosition, scrollPosition = _c === void 0 ? 0 : _c;
    var _d = useState(show), shouldRender = _d[0], setShouldRender = _d[1];
    var _e = useState(1), opacity = _e[0], setOpacity = _e[1];
    // Calculer l'opacité basée sur le scroll (1% de moins tous les 5px)
    useEffect(function () {
        var scrollSteps = Math.floor(scrollPosition / 5);
        var newOpacity = Math.max(0, 1 - (scrollSteps * 0.01));
        // Log chaque palier de 5px
        if (scrollPosition % 5 === 0 && scrollPosition > 0) {
            console.log("Scroll atteint ".concat(scrollPosition, "px - Opacit\u00E9: ").concat(newOpacity * 100, "%"));
        }
        setOpacity(newOpacity);
        if (newOpacity === 0) {
            setShouldRender(false);
        }
    }, [scrollPosition]);
    // Ne plus afficher le composant si l'opacité atteint 0
    if (!shouldRender || opacity === 0)
        return null;
    return (React.createElement("div", { className: "scrollhint fixed w-screen flex justify-center items-center pointer-events-none", style: {
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: opacity,
            transition: 'opacity 0.3s ease-out'
        } },
        React.createElement("div", { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm mx-4 relative overflow-hidden" },
            React.createElement(motion.div, { className: "w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center mx-auto", animate: {
                    scale: [1, 1.1, 1],
                }, transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                } },
                React.createElement(motion.div, { animate: {
                        x: [0, 8, 0],
                    }, transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }, className: "text-white text-2xl font-bold" }, "\u2192")),
            React.createElement("h3", { className: "text-xl font-bold text-gray-900 dark:text-white text-center mt-4" }, "Pr\u00EAt pour l'aventure ?"),
            React.createElement("p", { className: "text-gray-600 dark:text-gray-300 text-center mt-2" }, "Faites d\u00E9filer vers la droite pour commencer votre voyage \u00E0 travers les ann\u00E9es."),
            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine pointer-events-none" }))));
};
export default ScrollHint;
