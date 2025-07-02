import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TutorialPrompt } from './modals/TutorialPrompt';
export var SplashScreen = function (_a) {
    var onComplete = _a.onComplete;
    var _b = useState(1), step = _b[0], setStep = _b[1];
    var _c = useState(false), isClosingStep1 = _c[0], setIsClosingStep1 = _c[1];
    var _d = useState(false), isClosing = _d[0], setIsClosing = _d[1];
    var _e = useState(false), showTutorialPrompt = _e[0], setShowTutorialPrompt = _e[1];
    useEffect(function () {
        // Passer à l'étape 2 après 7 secondes
        var stepTimeout = setTimeout(function () {
            // Animation de sortie des premières phrases
            setIsClosingStep1(true);
            // Attendre la fin de l'animation de sortie avant de passer à l'étape 2
            setTimeout(function () { return setStep(2); }, 1500);
        }, 7000);
        return function () { return clearTimeout(stepTimeout); };
    }, []);
    var handleClose = function () {
        setIsClosing(true);
        setTimeout(function () {
            onComplete(false);
        }, 1200);
    };
    var handleStartClick = function () {
        setIsClosingStep1(true);
        setIsClosing(true);
        // On attend 1s pour la disparition + 0.5s de pause
        setTimeout(function () {
            setShowTutorialPrompt(true);
        }, 1500);
    };
    var handleTutorialChoice = function (wantsTutorial) {
        setShowTutorialPrompt(false); // Déclenche l'animation de sortie du tutorial
        setTimeout(function () {
            setIsClosing(true); // Déclenche l'animation de sortie du background
            setTimeout(function () {
                onComplete(wantsTutorial);
            }, 800); // Attendre que l'animation de sortie du background soit terminée
        }, 500); // Attendre que l'animation de sortie du tutorial soit terminée
    };
    // Animation de la flèche qui rebondit doucement
    var bounceAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(AnimatePresence, null,
            React.createElement(motion.div, { className: "fixed inset-0 bg-white dark:bg-gray-900 z-100 flex flex-col items-center justify-center isolate overflow-hidden", style: { zIndex: 9999 }, initial: { opacity: 1, y: 0 }, animate: { opacity: 1 }, exit: {
                    opacity: 0,
                    y: 100,
                    transition: {
                        duration: 0.8,
                        ease: "easeInOut"
                    }
                } },
                React.createElement("div", { className: "absolute inset-0 overflow-hidden opacity-100" },
                    React.createElement(motion.div, { className: "absolute inset-0", initial: { opacity: 0.5 }, style: {
                            background: "repeating-linear-gradient(\n                                    45deg,\n                                    transparent,\n                                    transparent 100px,\n                                    rgba(139, 92, 246, 0.15) 100px,\n                                    rgba(139, 92, 246, 0.15) 102px\n                                )"
                        }, animate: {
                            scale: [1, 1.5],
                            opacity: [0.5, 0]
                        }, transition: {
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear"
                        } }),
                    React.createElement(motion.div, { className: "absolute inset-0", initial: { opacity: 0.5 }, style: {
                            background: "repeating-linear-gradient(\n                                    -45deg,\n                                    transparent,\n                                    transparent 100px,\n                                    rgba(236, 72, 153, 0.15) 100px,\n                                    rgba(236, 72, 153, 0.15) 102px\n                                )"
                        }, animate: {
                            scale: [1, 1.5],
                            opacity: [0.5, 0]
                        }, transition: {
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 6
                        } }),
                    React.createElement(motion.div, { className: "absolute inset-0", initial: { opacity: 0.6 }, style: {
                            background: "repeating-linear-gradient(\n                                    90deg,\n                                    transparent,\n                                    transparent 50px,\n                                    rgba(139, 92, 246, 0.1) 50px,\n                                    rgba(139, 92, 246, 0.1) 52px\n                                )"
                        }, animate: {
                            rotate: [0, 90],
                            scale: [1, 1.2],
                            opacity: [0.6, 0.3]
                        }, transition: {
                            duration: 24,
                            repeat: Infinity,
                            ease: "linear"
                        } }),
                    React.createElement(motion.div, { className: "absolute inset-0", initial: { opacity: 0.6 }, style: {
                            background: "repeating-linear-gradient(\n                                    0deg,\n                                    transparent,\n                                    transparent 50px,\n                                    rgba(236, 72, 153, 0.1) 50px,\n                                    rgba(236, 72, 153, 0.1) 52px\n                                )"
                        }, animate: {
                            rotate: [0, -90],
                            scale: [1, 1.2],
                            opacity: [0.6, 0.3]
                        }, transition: {
                            duration: 24,
                            repeat: Infinity,
                            ease: "linear"
                        } }),
                    React.createElement(motion.div, { className: "absolute inset-0", initial: { opacity: 0.4 }, style: {
                            background: "repeating-linear-gradient(\n                                    60deg,\n                                    transparent,\n                                    transparent 150px,\n                                    rgba(139, 92, 246, 0.2) 150px,\n                                    rgba(139, 92, 246, 0.2) 153px\n                                )"
                        }, animate: {
                            x: [-200, 200],
                            y: [-200, 200],
                            opacity: [0.4, 0.7, 0.4]
                        }, transition: {
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        } }),
                    React.createElement(motion.div, { className: "absolute inset-0", initial: { opacity: 0.4 }, style: {
                            background: "repeating-linear-gradient(\n                                    -60deg,\n                                    transparent,\n                                    transparent 150px,\n                                    rgba(236, 72, 153, 0.2) 150px,\n                                    rgba(236, 72, 153, 0.2) 153px\n                                )"
                        }, animate: {
                            x: [200, -200],
                            y: [-200, 200],
                            opacity: [0.4, 0.7, 0.4]
                        }, transition: {
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 15
                        } }),
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/50 dark:to-gray-900/50" })),
                React.createElement(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-purple-500/[0.05] to-pink-500/[0.05] dark:from-purple-500/[0.03] dark:to-pink-500/[0.03] mix-blend-overlay", initial: { opacity: 0.6 }, animate: {
                        opacity: [0.6, 0.9, 0.6]
                    }, transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    } }),
                React.createElement(motion.div, { className: "absolute inset-0 opacity-[0.07] dark:opacity-[0.09] pointer-events-none mix-blend-overlay", style: {
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                        backgroundSize: '600px 600px'
                    }, animate: {
                        scale: [1, 1.15, 1],
                        rotate: [0, 2, -2, 0],
                        x: [0, 15, -15, 0],
                        y: [0, -15, 15, 0]
                    }, transition: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    } }),
                React.createElement(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-transparent via-purple-50/[0.08] to-pink-50/[0.08] dark:via-purple-900/[0.08] dark:to-pink-900/[0.08] pointer-events-none mix-blend-soft-light", animate: {
                        opacity: [0.6, 0.9, 0.6]
                    }, transition: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    } }),
                React.createElement(motion.div, { className: "absolute inset-0 bg-gradient-to-tr from-transparent via-purple-50/[0.05] to-pink-50/[0.05] dark:via-purple-900/[0.05] dark:to-pink-900/[0.05] pointer-events-none mix-blend-overlay", animate: {
                        opacity: [0.4, 0.7, 0.4]
                    }, transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    } }),
                React.createElement(motion.div, { className: "absolute inset-0 bg-gradient-to-bl from-transparent via-purple-50/[0.03] to-pink-50/[0.03] dark:via-purple-900/[0.03] dark:to-pink-900/[0.03] pointer-events-none mix-blend-overlay", animate: {
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1]
                    }, transition: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    } }),
                React.createElement("div", { className: "flex flex-col items-center justify-between min-h-[80vh] py-12 relative w-full" },
                    React.createElement("div", { className: "flex-1 flex flex-col items-center justify-center w-full" },
                        React.createElement(motion.div, { className: "relative font-black text-7xl md:text-9xl tracking-tighter", initial: { y: 50, opacity: 0 }, animate: {
                                y: step === 1 ? 0 : -50,
                                opacity: isClosing ? 0 : 1
                            }, transition: {
                                duration: 1.2,
                                type: "spring",
                                bounce: 0.3
                            } },
                            React.createElement("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600" }, "SKANDALZ")),
                        step === 1 && (React.createElement(motion.div, { className: "relative text-2xl md:text-4xl font-medium text-center px-6 mt-12", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: {
                                opacity: 0,
                                transition: { duration: 0.8 }
                            } },
                            React.createElement(motion.div, { className: "text-gray-800 dark:text-gray-200 flex justify-center items-center flex-wrap gap-x-2", initial: { opacity: 0, y: 20 }, animate: {
                                    opacity: isClosingStep1 ? 0 : 1,
                                    y: isClosingStep1 ? -20 : 0
                                }, transition: {
                                    opacity: { duration: 0.6 },
                                    y: { duration: 0.6 }
                                } },
                                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: isClosingStep1 ? 0 : 1 }, transition: {
                                        opacity: {
                                            duration: 0.3,
                                            delay: isClosingStep1 ? 0 : 1.5
                                        }
                                    } }, "Car"),
                                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: isClosingStep1 ? 0 : 1 }, transition: {
                                        opacity: {
                                            duration: 0.3,
                                            delay: isClosingStep1 ? 0.1 : 1.7
                                        }
                                    } }, "ils"),
                                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: isClosingStep1 ? 0 : 1 }, transition: {
                                        opacity: {
                                            duration: 0.3,
                                            delay: isClosingStep1 ? 0.2 : 1.9
                                        }
                                    } }, "ne"),
                                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: isClosingStep1 ? 0 : 1 }, transition: {
                                        opacity: {
                                            duration: 0.3,
                                            delay: isClosingStep1 ? 0.3 : 2.1
                                        }
                                    } }, "se"),
                                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: isClosingStep1 ? 0 : 1 }, transition: {
                                        opacity: {
                                            duration: 0.3,
                                            delay: isClosingStep1 ? 0.4 : 2.3
                                        }
                                    } }, "cachent"),
                                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: isClosingStep1 ? 0 : 1 }, transition: {
                                        opacity: {
                                            duration: 0.3,
                                            delay: isClosingStep1 ? 0.5 : 2.5
                                        }
                                    } }, "m\u00EAme"),
                                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: isClosingStep1 ? 0 : 1 }, transition: {
                                        opacity: {
                                            duration: 0.3,
                                            delay: isClosingStep1 ? 0.6 : 2.7
                                        }
                                    } }, "plus,")),
                            React.createElement(motion.div, { className: "text-purple-600 dark:text-purple-400 font-bold mt-2 flex justify-center items-center flex-wrap gap-x-2", initial: { opacity: 0, y: 20 }, animate: {
                                    opacity: isClosingStep1 ? 0 : 1,
                                    y: isClosingStep1 ? -20 : 0
                                }, transition: {
                                    opacity: { duration: 0.6, delay: isClosingStep1 ? 0.3 : 3.2 },
                                    y: { duration: 0.6, delay: isClosingStep1 ? 0.3 : 3.2 }
                                } },
                                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: isClosingStep1 ? 0 : 1 }, transition: {
                                        opacity: {
                                            duration: 0.3,
                                            delay: isClosingStep1 ? 0.6 : 3.2
                                        }
                                    } }, "aujourd'hui"),
                                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: isClosingStep1 ? 0 : 1 }, transition: {
                                        opacity: {
                                            duration: 0.3,
                                            delay: isClosingStep1 ? 0.7 : 3.4
                                        }
                                    } }, "nous"),
                                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: isClosingStep1 ? 0 : 1 }, transition: {
                                        opacity: {
                                            duration: 0.3,
                                            delay: isClosingStep1 ? 0.8 : 3.6
                                        }
                                    } }, "les"),
                                React.createElement(motion.span, { initial: { opacity: 0 }, animate: { opacity: isClosingStep1 ? 0 : 1 }, transition: {
                                        opacity: {
                                            duration: 0.3,
                                            delay: isClosingStep1 ? 0.9 : 3.8
                                        }
                                    } }, "affichons.")))),
                        step === 2 && (React.createElement(motion.div, { className: "relative max-w-2xl text-center px-6", initial: { opacity: 0, y: 20 }, animate: { opacity: isClosing ? 0 : 1, y: isClosing ? -20 : 0 }, transition: {
                                opacity: { duration: 0.8 },
                                y: { duration: 0.8 }
                            } },
                            React.createElement(motion.p, { className: "text-2xl text-gray-800 dark:text-gray-100 text-2xl md:text-4xl font-bold mt-2 mb-12", initial: { opacity: 0, y: 30 }, animate: { opacity: isClosing ? 0 : 1, y: 0 }, transition: {
                                    duration: 1.2,
                                    delay: 0.3,
                                    type: "spring",
                                    bounce: 0.2
                                } }, "Une chronologie interactive des scandales politiques fran\u00E7ais."),
                            React.createElement(motion.p, { className: "text-2xl mt-16 leading-relaxed", initial: { opacity: 0, y: 30 }, animate: { opacity: isClosing ? 0 : 1, y: 0 }, transition: {
                                    duration: 1.2,
                                    delay: 1,
                                    type: "spring",
                                    bounce: 0.2
                                } },
                                "Un outil au service du",
                                ' ',
                                React.createElement(motion.span, { className: "relative px-4 py-2 font-bold text-white", initial: { opacity: 0, rotate: -2, scale: 0.95 }, animate: { opacity: 1, rotate: -2, scale: 1 }, transition: {
                                        duration: 0.8,
                                        delay: 1.5,
                                    }, style: {
                                        background: "linear-gradient(to right, rgb(139, 92, 246), rgb(236, 72, 153))",
                                        borderRadius: "6px",
                                        display: "inline-block",
                                        transform: "rotate(-2deg)",
                                    } }, "d\u00E9bat"),
                                ' ',
                                "et de la",
                                ' ',
                                React.createElement(motion.span, { className: "relative px-4 py-2 font-bold text-white", initial: { opacity: 0, rotate: 2, scale: 0.95 }, animate: { opacity: 1, rotate: 2, scale: 1 }, transition: {
                                        duration: 0.8,
                                        delay: 1.8,
                                    }, style: {
                                        background: "linear-gradient(to right, rgb(139, 92, 246), rgb(236, 72, 153))",
                                        borderRadius: "6px",
                                        display: "inline-block",
                                        transform: "rotate(2deg)",
                                    } }, "d\u00E9mocratie"),
                                "."))),
                        step === 2 && (React.createElement(motion.div, { className: "fixed left-0 right-0 bottom-12 flex flex-col items-center gap-4", initial: { opacity: 0, y: 20 }, animate: {
                                opacity: isClosing ? 0 : 1,
                                y: isClosing ? 10 : 0
                            }, transition: {
                                opacity: { duration: 0.2 },
                                y: { duration: 0.2 }
                            } },
                            React.createElement(motion.span, { className: "text-lg font-medium text-gray-700 dark:text-gray-200", initial: { opacity: 0 }, animate: { opacity: isClosing ? 0 : 1 }, whileInView: {
                                    y: [-2, -8, -2],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }, transition: {
                                    opacity: { duration: 0.5, delay: 5 }
                                } }, "Commencer"),
                            React.createElement(motion.button, { className: "cursor-pointer text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors", onClick: handleStartClick, whileInView: {
                                    y: [-2, -12, -2],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }, initial: { opacity: 0 }, animate: { opacity: isClosing ? 0 : 1 }, transition: {
                                    opacity: { duration: 0.5, delay: 5 }
                                } },
                                React.createElement("svg", { className: "w-12 h-12", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }))))))))),
        React.createElement(TutorialPrompt, { isVisible: showTutorialPrompt, onChoice: handleTutorialChoice })));
};
export default SplashScreen;
