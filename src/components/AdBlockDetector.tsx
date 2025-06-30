import React, { useState, useEffect } from 'react';

interface AdBlockDetectorProps {
  children: React.ReactNode;
}

const AdBlockDetector: React.FC<AdBlockDetectorProps> = ({ children }) => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Détection simple d'adblock
    const checkAdBlock = () => {
      // Créer un élément qui ressemble à une pub
      const testAd = document.createElement('div');
      testAd.innerHTML = '&nbsp;';
      testAd.className = 'adsbox';
      testAd.style.position = 'absolute';
      testAd.style.left = '-10000px';
      testAd.style.top = '-1000px';
      testAd.style.width = '1px';
      testAd.style.height = '1px';
      
      document.body.appendChild(testAd);
      
      // Vérifier si l'élément est caché
      setTimeout(() => {
        const isHidden = testAd.offsetHeight === 0 || testAd.offsetWidth === 0;
        document.body.removeChild(testAd);
        
        if (isHidden) {
          setAdBlockDetected(true);
          setShowWarning(true);
          
          // Masquer l'avertissement après 10 secondes
          setTimeout(() => setShowWarning(false), 10000);
        }
      }, 100);
    };

    checkAdBlock();
  }, []);

  if (adBlockDetected && showWarning) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md mx-4 shadow-xl">
          <div className="text-center">
            <div className="text-yellow-500 text-4xl mb-4">⚠️</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Adblock détecté
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Votre bloqueur de publicités peut interférer avec le fonctionnement de l'application. 
              Pour une expérience optimale, désactivez temporairement votre adblock pour ce site.
            </p>
            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <p>• Ajoutez ce site à la liste blanche de votre adblock</p>
              <p>• Ou désactivez temporairement l'adblock</p>
            </div>
            <button
              onClick={() => setShowWarning(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Continuer quand même
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AdBlockDetector; 