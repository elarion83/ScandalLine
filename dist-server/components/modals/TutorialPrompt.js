import { motion, AnimatePresence } from 'framer-motion';
export var TutorialPrompt = function (_a) {
    var isVisible = _a.isVisible, onChoice = _a.onChoice;
    return (React.createElement(AnimatePresence, null, isVisible && (React.createElement(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, y: 20 }, transition: { duration: 0.5 }, className: "fixed inset-0 flex items-center justify-center", style: { zIndex: 10000 } },
        React.createElement("div", { className: "text-center max-w-md" },
            React.createElement("div", { className: "mb-12 relative" },
                React.createElement(motion.span, { initial: { opacity: 0, x: -100 }, animate: {
                        opacity: [0, 1, 1, 0],
                        x: [-100, 0, 50, 100],
                        scale: [0.8, 1, 1, 0.8]
                    }, transition: {
                        duration: 1.5,
                        delay: 0.2,
                        times: [0, 0.3, 0.7, 1]
                    }, className: "block text-3xl text-gray-800 dark:text-gray-100 font-bold absolute w-full text-center" }, "Psst..."),
                React.createElement(motion.span, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.4, delay: 1.7 }, className: "block mb-6 text-xl text-gray-800 dark:text-gray-100 font-medium" }, "Hey vous l\u00E0 !"),
                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.4, delay: 2.2 }, className: "block mb-2 text-xl text-gray-800 dark:text-gray-100 font-medium" }, "Vous pr\u00E9f\u00E9rez...")),
            React.createElement("div", { className: "flex flex-col gap-4 items-center" },
                React.createElement(motion.button, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, transition: { duration: 0.5, delay: 3.5 }, onClick: function () { return onChoice(true); }, className: "px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-base w-full max-w-xs hover:scale-105 transform duration-200 texture-overlay" }, "30 secondes d'explication rapide"),
                React.createElement(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3, delay: 4.2 }, className: "text-base text-gray-700 dark:text-gray-300 my-2 font-medium" }, "- ou -"),
                React.createElement(motion.button, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 20 }, transition: { duration: 0.5, delay: 4.9 }, onClick: function () { return onChoice(false); }, className: "px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-base w-full max-w-xs hover:scale-105 transform duration-200 texture-overlay" }, "Explorer par vous-m\u00EAme"),
                React.createElement(motion.div, { initial: { opacity: 0, scale: 0.5, rotate: -10 }, animate: { opacity: 1, scale: 1, rotate: 0 }, exit: { opacity: 0, scale: 0.5, rotate: 10 }, transition: {
                        duration: 0.5,
                        delay: 5.2,
                        type: "spring",
                        bounce: 0.5
                    }, className: "text-8xl text-gray-400 dark:text-gray-500 mt-4 font-black", style: { opacity: 0.3, fontFamily: "'Comic Sans MS', cursive, sans-serif" } }, "?")))))));
};
