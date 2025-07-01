import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Step {
  target: string | string[];
  title: string;
  description: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

const TOUR_STEPS: Step[] = [
  {
    target: ['[data-tour="filters"]', '[data-tour="stats"]'],
    title: 'Filtres et Statistiques',
    description: 'Utilisez les filtres pour affiner votre recherche par type d\'affaire, statut ou parti politique. Le bouton statistiques vous donne une vue d\'ensemble des données avec des graphiques détaillés.',
    position: 'bottom'
  },
  {
    target: '[data-tour="timeline"]',
    title: 'Frise chronologique',
    description: 'Naviguez à travers le temps en faisant défiler horizontalement. Vous pouvez zoomer/dézoomer pour voir plus ou moins de détails. Cliquez sur une affaire pour voir tous les détails. Les noms des personnes impliquées sont cliquables et vous permettent de voir toutes les affaires liées à cette personne.',
    position: 'left'
  }
];

interface OnboardingTourProps {
  onComplete: () => void;
}

const OnboardingTour: React.FC<OnboardingTourProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Gestion de la surbrillance
  useEffect(() => {
    // Nettoyage de toutes les surbrillances précédentes
    const removeHighlights = () => {
      document.querySelectorAll('.tour-highlight').forEach(el => {
        el.classList.remove('tour-highlight');
      });
    };

    // Ajout de la surbrillance aux éléments cibles
    const addHighlight = () => {
      const target = TOUR_STEPS[currentStep].target;
      const targets = Array.isArray(target) ? target : [target];
      
      targets.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          element.classList.add('tour-highlight');
        });
      });
    };

    // Application des surbrillances
    removeHighlights();
    addHighlight();

    // Nettoyage à la désactivation du composant
    return () => {
      removeHighlights();
    };
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  if (!isVisible) return null;

  const step = TOUR_STEPS[currentStep];

  return (
    <>
      {/* Overlay avec z-index en dessous des highlights */}
      <div className="fixed inset-0 bg-black/70 z-[90]" onClick={handleComplete} />
      
      {/* Tooltip avec z-index encore plus élevé */}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 z-[103] w-full max-w-md"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {step.title}
          </h3>
          <button
            onClick={handleComplete}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {step.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {Array.from({ length: TOUR_STEPS.length }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep
                    ? 'bg-blue-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                Précédent
              </button>
            )}
            <button
              onClick={handleNext}
              className="px-3 py-1 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
            >
              {currentStep === TOUR_STEPS.length - 1 ? 'Terminer' : 'Suivant'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingTour;