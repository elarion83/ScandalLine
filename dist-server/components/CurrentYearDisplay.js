import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateYearMarkers, findNearestYearMarker } from '../utils/timelineLayout';
var CurrentYearDisplay = function (_a) {
    var startYear = _a.startYear, endYear = _a.endYear, timelineWidth = _a.timelineWidth, scrollPosition = _a.scrollPosition, viewportWidth = _a.viewportWidth;
    var _b = useState(false), hasBeenVisible = _b[0], setHasBeenVisible = _b[1];
    // Générer les marqueurs d'années
    var yearMarkers = generateYearMarkers(startYear, endYear, timelineWidth, 1);
    // Calculer la position centrale de la vue
    var currentScrollCenter = scrollPosition + viewportWidth / 2;
    // Mettre à jour la visibilité en fonction de la position
    useEffect(function () {
        if (yearMarkers.length >= 2 && currentScrollCenter > yearMarkers[1].x) {
            setHasBeenVisible(true);
        }
    }, [currentScrollCenter, yearMarkers]);
    // Si on n'a pas dépassé le second marqueur et qu'on n'a jamais été visible, on ne rend rien
    if (yearMarkers.length < 2 && !hasBeenVisible) {
        return null;
    }
    return (React.createElement("div", { className: "absolute pointer-events-none select-none", style: {
            left: scrollPosition,
            width: viewportWidth,
            transition: 'left 150ms ease',
            top: '-55px' // Déplace l'année vers le haut
        } },
        React.createElement(AnimatePresence, null, hasBeenVisible && (React.createElement(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: "easeOut" }, className: "flex items-center justify-center w-full" },
            React.createElement("span", { className: "text-[9rem] font-bold bg-gradient-to-r from-violet-200 to-pink-200 dark:from-violet-900 dark:to-pink-900 bg-clip-text text-transparent" }, findNearestYearMarker(scrollPosition, viewportWidth, yearMarkers)))))));
};
export default CurrentYearDisplay;
