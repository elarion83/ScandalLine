import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TutorialPrompt } from './modals/TutorialPrompt';

interface SplashScreenProps {
    onComplete: (wantsTutorial: boolean) => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [isClosingStep1, setIsClosingStep1] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [showTutorialPrompt, setShowTutorialPrompt] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);

    useEffect(() => {
        // Passer à l'étape 2 après 7 secondes
        const stepTimeout = setTimeout(() => {
            // Animation de sortie des premières phrases
            setIsClosingStep1(true);
            // Attendre la fin de l'animation de sortie avant de passer à l'étape 2
            setTimeout(() => setStep(2), 1500);
        }, 7000);
        return () => clearTimeout(stepTimeout);
    }, []);

    const handleStartClick = () => {
        setIsClosingStep1(true);
        setIsClosing(true);
        // On attend 1s pour la disparition + 0.5s de pause
        setTimeout(() => {
            setShowTutorialPrompt(true);
        }, 1500);
    };

    const handleTutorialChoice = (wantsTutorial: boolean) => {
        if (wantsTutorial) {
            // Si l'utilisateur veut le tutoriel rapide, passer à l'étape 3
            setShowTutorialPrompt(false);
            setShowFeatures(true);
            setStep(3);
        } else {
            // Si l'utilisateur ne veut pas de tutoriel, fermer directement
            setShowTutorialPrompt(false);
            setTimeout(() => {
                setIsClosing(true);
                setTimeout(() => {
                    onComplete(false);
                }, 800);
            }, 500);
        }
    };

    const handleFeaturesComplete = () => {
        setShowFeatures(false);
        setTimeout(() => {
            setIsClosing(true);
            setTimeout(() => {
                onComplete(true);
            }, 800);
        }, 500);
    };

    return (
        <>
            <AnimatePresence>
                <motion.div
                    className="fixed inset-0 bg-white dark:bg-gray-900 z-100 flex flex-col items-center justify-center isolate overflow-hidden"
                    style={{ zIndex: 9999 }}
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        y: 100,
                        transition: {
                            duration: 0.8,
                            ease: "easeInOut"
                        }
                    }}
                >
                    {/* Fond de lignes animées - Pas de délai initial */}
                    <div className="absolute inset-0 overflow-hidden opacity-100">
                        {/* Première couche de lignes - Mouvement vers le centre */}
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0.5 }}
                            style={{
                                background: `repeating-linear-gradient(
                                    45deg,
                                    transparent,
                                    transparent 100px,
                                    rgba(139, 92, 246, 0.15) 100px,
                                    rgba(139, 92, 246, 0.15) 102px
                                )`
                            }}
                            animate={{
                                scale: [1, 1.5],
                                opacity: [0.5, 0]
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0.5 }}
                            style={{
                                background: `repeating-linear-gradient(
                                    -45deg,
                                    transparent,
                                    transparent 100px,
                                    rgba(236, 72, 153, 0.15) 100px,
                                    rgba(236, 72, 153, 0.15) 102px
                                )`
                            }}
                            animate={{
                                scale: [1, 1.5],
                                opacity: [0.5, 0]
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear",
                                delay: 6
                            }}
                        />

                        {/* Deuxième couche - Lignes plus fines avec rotation */}
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0.6 }}
                            style={{
                                background: `repeating-linear-gradient(
                                    90deg,
                                    transparent,
                                    transparent 50px,
                                    rgba(139, 92, 246, 0.1) 50px,
                                    rgba(139, 92, 246, 0.1) 52px
                                )`
                            }}
                            animate={{
                                rotate: [0, 90],
                                scale: [1, 1.2],
                                opacity: [0.6, 0.3]
                            }}
                            transition={{
                                duration: 24,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0.6 }}
                            style={{
                                background: `repeating-linear-gradient(
                                    0deg,
                                    transparent,
                                    transparent 50px,
                                    rgba(236, 72, 153, 0.1) 50px,
                                    rgba(236, 72, 153, 0.1) 52px
                                )`
                            }}
                            animate={{
                                rotate: [0, -90],
                                scale: [1, 1.2],
                                opacity: [0.6, 0.3]
                            }}
                            transition={{
                                duration: 24,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        {/* Troisième couche - Lignes diagonales dynamiques */}
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0.4 }}
                            style={{
                                background: `repeating-linear-gradient(
                                    60deg,
                                    transparent,
                                    transparent 150px,
                                    rgba(139, 92, 246, 0.2) 150px,
                                    rgba(139, 92, 246, 0.2) 153px
                                )`
                            }}
                            animate={{
                                x: [-200, 200],
                                y: [-200, 200],
                                opacity: [0.4, 0.7, 0.4]
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0.4 }}
                            style={{
                                background: `repeating-linear-gradient(
                                    -60deg,
                                    transparent,
                                    transparent 150px,
                                    rgba(236, 72, 153, 0.2) 150px,
                                    rgba(236, 72, 153, 0.2) 153px
                                )`
                            }}
                            animate={{
                                x: [200, -200],
                                y: [-200, 200],
                                opacity: [0.4, 0.7, 0.4]
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                                delay: 15
                            }}
                        />

                        {/* Vignette pour adoucir les bords */}
                        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/50 dark:to-gray-900/50" />
                    </div>

                    {/* Overlay pour ajouter de la profondeur */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.05] to-pink-500/[0.05] dark:from-purple-500/[0.03] dark:to-pink-500/[0.03] mix-blend-overlay"
                        initial={{ opacity: 0.6 }}
                        animate={{
                            opacity: [0.6, 0.9, 0.6]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Texture animée */}
                    <motion.div
                        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.09] pointer-events-none mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundSize: '600px 600px'
                        }}
                        animate={{
                            scale: [1, 1.15, 1],
                            rotate: [0, 2, -2, 0],
                            x: [0, 15, -15, 0],
                            y: [0, -15, 15, 0]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Overlay gradient principal */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-50/[0.08] to-pink-50/[0.08] dark:via-purple-900/[0.08] dark:to-pink-900/[0.08] pointer-events-none mix-blend-soft-light"
                        animate={{
                            opacity: [0.6, 0.9, 0.6]
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Second gradient pour la profondeur */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-50/[0.05] to-pink-50/[0.05] dark:via-purple-900/[0.05] dark:to-pink-900/[0.05] pointer-events-none mix-blend-overlay"
                        animate={{
                            opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 3
                        }}
                    />

                    {/* Troisième gradient pour plus de dynamisme */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-50/[0.03] to-pink-50/[0.03] dark:via-purple-900/[0.03] dark:to-pink-900/[0.03] pointer-events-none mix-blend-overlay"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />

                    {/* Container principal avec flex pour centrer */}
                    <div className="flex flex-col items-center justify-between min-h-[80vh] py-12 relative w-full">
                        {/* Logo et contenu avec fade in */}
                        <div className="flex-1 flex flex-col items-center justify-center w-full">
                            <motion.div
                                className="relative font-black text-7xl md:text-9xl tracking-tighter"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ 
                                    y: step === 1 ? 0 : -50,
                                    opacity: isClosing ? 0 : 1
                                }}
                                transition={{ 
                                    duration: 1.2,
                                    type: "spring",
                                    bounce: 0.3
                                }}
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                                    SKANDAL
                                </span>
                            </motion.div>

                            {/* Première étape : Slogan principal */}
                            {step === 1 && (
                                <motion.div
                                    className="relative text-2xl md:text-4xl font-medium text-center px-6 mt-12"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ 
                                        opacity: 0,
                                        transition: { duration: 0.8 }
                                    }}
                                >
                                    <motion.div 
                                        className="text-gray-800 dark:text-gray-200 flex justify-center items-center flex-wrap gap-x-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ 
                                            opacity: isClosingStep1 ? 0 : 1,
                                            y: isClosingStep1 ? -20 : 0
                                        }}
                                        transition={{ 
                                            opacity: { duration: 0.6 },
                                            y: { duration: 0.6 }
                                        }}
                                    >
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isClosingStep1 ? 0 : 1 }}
                                            transition={{ 
                                                opacity: { 
                                                    duration: 0.3,
                                                    delay: isClosingStep1 ? 0 : 1.5
                                                }
                                            }}
                                        >
                                            Car
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isClosingStep1 ? 0 : 1 }}
                                            transition={{ 
                                                opacity: { 
                                                    duration: 0.3,
                                                    delay: isClosingStep1 ? 0.1 : 1.7
                                                }
                                            }}
                                        >
                                            ils
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isClosingStep1 ? 0 : 1 }}
                                            transition={{ 
                                                opacity: { 
                                                    duration: 0.3,
                                                    delay: isClosingStep1 ? 0.2 : 1.9
                                                }
                                            }}
                                        >
                                            ne
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isClosingStep1 ? 0 : 1 }}
                                            transition={{ 
                                                opacity: { 
                                                    duration: 0.3,
                                                    delay: isClosingStep1 ? 0.3 : 2.1
                                                }
                                            }}
                                        >
                                            se
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isClosingStep1 ? 0 : 1 }}
                                            transition={{ 
                                                opacity: { 
                                                    duration: 0.3,
                                                    delay: isClosingStep1 ? 0.4 : 2.3
                                                }
                                            }}
                                        >
                                            cachent
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isClosingStep1 ? 0 : 1 }}
                                            transition={{ 
                                                opacity: { 
                                                    duration: 0.3,
                                                    delay: isClosingStep1 ? 0.5 : 2.5
                                                }
                                            }}
                                        >
                                            même
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isClosingStep1 ? 0 : 1 }}
                                            transition={{ 
                                                opacity: { 
                                                    duration: 0.3,
                                                    delay: isClosingStep1 ? 0.6 : 2.7
                                                }
                                            }}
                                        >
                                            plus,
                                        </motion.span>
                                    </motion.div>
                                    <motion.div
                                        className="text-purple-600 dark:text-purple-400 font-bold mt-2 flex justify-center items-center flex-wrap gap-x-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ 
                                            opacity: isClosingStep1 ? 0 : 1,
                                            y: isClosingStep1 ? -20 : 0
                                        }}
                                        transition={{ 
                                            opacity: { duration: 0.6, delay: isClosingStep1 ? 0.3 : 3.2 },
                                            y: { duration: 0.6, delay: isClosingStep1 ? 0.3 : 3.2 }
                                        }}
                                    >
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isClosingStep1 ? 0 : 1 }}
                                            transition={{ 
                                                opacity: { 
                                                    duration: 0.3,
                                                    delay: isClosingStep1 ? 0.6 : 3.2
                                                }
                                            }}
                                        >
                                            aujourd'hui
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isClosingStep1 ? 0 : 1 }}
                                            transition={{ 
                                                opacity: { 
                                                    duration: 0.3,
                                                    delay: isClosingStep1 ? 0.7 : 3.4
                                                }
                                            }}
                                        >
                                            nous
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isClosingStep1 ? 0 : 1 }}
                                            transition={{ 
                                                opacity: { 
                                                    duration: 0.3,
                                                    delay: isClosingStep1 ? 0.8 : 3.6
                                                }
                                            }}
                                        >
                                            les
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isClosingStep1 ? 0 : 1 }}
                                            transition={{ 
                                                opacity: { 
                                                    duration: 0.3,
                                                    delay: isClosingStep1 ? 0.9 : 3.8
                                                }
                                            }}
                                        >
                                            affichons.
                                        </motion.span>
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* Deuxième étape : Description */}
                            {step === 2 && (
                                <motion.div
                                    className="relative max-w-2xl text-center px-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: isClosing ? 0 : 1, y: isClosing ? -20 : 0 }}
                                    transition={{ 
                                        opacity: { duration: 0.8 },
                                        y: { duration: 0.8 }
                                    }}
                                >
                                    <motion.p 
                                        className="text-2xl text-gray-800 dark:text-gray-100 text-2xl md:text-4xl font-bold mt-2 mb-12"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: isClosing ? 0 : 1, y: 0 }}
                                        transition={{ 
                                            duration: 1.2,
                                            delay: 0.3,
                                            type: "spring",
                                            bounce: 0.2
                                        }}
                                    >
                                        Une chronologie interactive des scandales politiques français.
                                    </motion.p>
                                    <motion.p
                                        className="text-2xl mt-16 leading-relaxed"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: isClosing ? 0 : 1, y: 0 }}
                                        transition={{ 
                                            duration: 1.2,
                                            delay: 1,
                                            type: "spring",
                                            bounce: 0.2
                                        }}
                                    >
                                        Un outil au service du{' '}
                                        <motion.span
                                            className="relative px-4 py-2 font-bold text-white"
                                            initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
                                            animate={{ opacity: 1, rotate: -2, scale: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 1.5,
                                            }}
                                            style={{
                                                background: "linear-gradient(to right, rgb(139, 92, 246), rgb(236, 72, 153))",
                                                borderRadius: "6px",
                                                display: "inline-block",
                                                transform: "rotate(-2deg)",
                                            }}
                                        >
                                            débat
                                        </motion.span>
                                        {' '}et de la{' '}
                                        <motion.span
                                            className="relative px-4 py-2 font-bold text-white"
                                            initial={{ opacity: 0, rotate: 2, scale: 0.95 }}
                                            animate={{ opacity: 1, rotate: 2, scale: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 1.8,
                                            }}
                                            style={{
                                                background: "linear-gradient(to right, rgb(139, 92, 246), rgb(236, 72, 153))",
                                                borderRadius: "6px",
                                                display: "inline-block",
                                                transform: "rotate(2deg)",
                                            }}
                                        >
                                            démocratie
                                        </motion.span>.
                                    </motion.p>
                                </motion.div>
                            )}

                            {/* Troisième étape : Liste des fonctionnalités */}
                            {step === 3 && showFeatures && (
                                <motion.div
                                    className="relative max-w-2xl text-center px-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        opacity: { duration: 0.8 },
                                        y: { duration: 0.8 }
                                    }}
                                >
                                    <motion.h2 
                                        className="text-3xl text-gray-800 dark:text-gray-100 font-bold mb-6"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                            duration: 1.2,
                                            delay: 0.3,
                                            type: "spring",
                                            bounce: 0.2
                                        }}
                                    >
                                        Découvrez Skandal
                                    </motion.h2>

                                    <motion.p
                                        className="text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                            duration: 1.2,
                                            delay: 0.6,
                                            type: "spring",
                                            bounce: 0.2
                                        }}
                                    >
                                        Une plateforme qui{' '}
                                        <motion.span
                                            className="relative px-3 py-1 font-bold text-white"
                                            initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
                                            animate={{ opacity: 1, rotate: -2, scale: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.9,
                                            }}
                                            style={{
                                                background: "linear-gradient(to right, rgb(139, 92, 246), rgb(236, 72, 153))",
                                                borderRadius: "6px",
                                                display: "inline-block",
                                                transform: "rotate(-2deg)",
                                            }}
                                        >
                                            démocratise
                                        </motion.span>
                                        {' '}l'accès aux scandales politiques.
                                    </motion.p>
                                    
                                    <motion.div
                                        className="text-left space-y-4 mb-10 max-w-lg mx-auto"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                            duration: 1.2,
                                            delay: 1.8,
                                            type: "spring",
                                            bounce: 0.2
                                        }}
                                    >
                                        <motion.div 
                                            className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-200"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 2.1 }}
                                        >
                                            <span className="text-purple-500 dark:text-purple-400 font-bold mt-1">•</span>
                                            <span>Explorez une <strong>timeline interactive</strong> avec zoom fluide et navigation intuitive</span>
                                        </motion.div>
                                        <motion.div 
                                            className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-200"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 2.3 }}
                                        >
                                            <span className="text-purple-500 dark:text-purple-400 font-bold mt-1">•</span>
                                            <span>Filtrez par <strong>type de scandale</strong> et <strong>statut juridique</strong> pour trouver ce qui vous intéresse</span>
                                        </motion.div>
                                        <motion.div 
                                            className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-200"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 2.5 }}
                                        >
                                            <span className="text-purple-500 dark:text-purple-400 font-bold mt-1">•</span>
                                            <span>Découvrez les <strong>profils détaillés</strong> des personnalités impliquées</span>
                                        </motion.div>
                                    </motion.div>

                                    <motion.button
                                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                        onClick={handleFeaturesComplete}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                            duration: 1.2,
                                            delay: 3.2,
                                            type: "spring",
                                            bounce: 0.2
                                        }}
                                    >
                                        J'ai compris !
                                    </motion.button>
                                </motion.div>
                            )}

                            {/* Flèche de fermeture */}
                            {step === 2 && !showFeatures && (
                                <motion.div 
                                    className="fixed left-0 right-0 bottom-6 flex flex-col items-center gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ 
                                        opacity: isClosing ? 0 : 1,
                                        y: isClosing ? 10 : 0
                                    }}
                                    transition={{ 
                                        opacity: { duration: 0.2 },
                                        y: { duration: 0.2 }
                                    }}
                                >
                                    <motion.button
                                        className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
                                        onClick={handleStartClick}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isClosing ? 0 : 1 }}
                                        transition={{ 
                                            opacity: { duration: 0.5, delay: 5 }
                                        }}
                                    >
                                        Commencer
                                    </motion.button>
                                    <motion.button
                                        className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                        onClick={handleStartClick}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isClosing ? 0 : 1 }}
                                        transition={{ 
                                            opacity: { duration: 0.5, delay: 5 }
                                        }}
                                    >
                                        <svg 
                                            className="w-12 h-12"
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                            />
                                        </svg>
                                    </motion.button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <TutorialPrompt 
                isVisible={showTutorialPrompt} 
                onChoice={handleTutorialChoice}
            />
        </>
    );
};

export default SplashScreen;