import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useTimeline } from '../../contexts/TimelineContext';

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
    position: 'top'
  }
];

interface OnboardingTourProps {
  onComplete: () => void;
}

const OnboardingTour: React.FC<OnboardingTourProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { dispatch } = useTimeline();

  useEffect(() => {
    // Remove all previous highlights
    document.querySelectorAll('.tour-highlight').forEach(el => {
      el.classList.remove('tour-highlight');
    });

    // Add highlight to current target element(s)
    const target = TOUR_STEPS[currentStep].target;
    const targets = Array.isArray(target) ? target : [target];
    
    targets.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        element.classList.add('tour-highlight');
      }
    });

    return () => {
      // Clean up on unmount or step change
      targets.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
          element.classList.remove('tour-highlight');
        }
      });
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
    // Remove all highlights before closing
    document.querySelectorAll('.tour-highlight').forEach(el => {
      el.classList.remove('tour-highlight');
    });
    
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 300); // Wait for fade out animation
  };

  if (!isVisible) return null;

  const step = TOUR_STEPS[currentStep];
  const target = Array.isArray(step.target) ? step.target[0] : step.target;
  const targetElement = document.querySelector(target);
  const targetRect = targetElement?.getBoundingClientRect();

  if (!targetRect) return null;

  // Calculate tooltip position based on step position
  const getTooltipStyle = () => {
    // Pour l'étape de la timeline, on centre la modale
    if (step.target === '[data-tour="timeline"]') {
      return {
        position: 'fixed',
        maxWidth: '400px', // Un peu plus large pour le contenu plus long
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      } as React.CSSProperties;
    }

    const gap = 12; // Gap between target and tooltip
    const padding = 20; // Minimum padding from viewport edges
    let style: React.CSSProperties = {
      position: 'fixed',
      maxWidth: '300px'
    };

    // Calculate initial position based on preferred position
    let top: number | undefined;
    let bottom: number | undefined;
    let left: number | undefined;
    let right: number | undefined;
    let transform = '';

    switch (step.position) {
      case 'top':
        bottom = window.innerHeight - targetRect.top + gap;
        left = targetRect.left + targetRect.width / 2;
        transform = 'translateX(-50%)';
        break;
      case 'bottom':
        top = targetRect.bottom + gap;
        left = targetRect.left + targetRect.width / 2;
        transform = 'translateX(-50%)';
        break;
      case 'left':
        top = targetRect.top + targetRect.height / 2;
        right = window.innerWidth - targetRect.left + gap;
        transform = 'translateY(-50%)';
        break;
      case 'right':
        top = targetRect.top + targetRect.height / 2;
        left = targetRect.right + gap;
        transform = 'translateY(-50%)';
        break;
    }

    // Adjust position to keep tooltip within viewport
    if (top !== undefined) {
      if (top + 200 > window.innerHeight - padding) { // 200 is approximate tooltip height
        // Switch to top if there's more space there
        if (targetRect.top > window.innerHeight - targetRect.bottom) {
          top = undefined;
          bottom = window.innerHeight - targetRect.top + gap;
        } else {
          top = Math.max(padding, Math.min(top, window.innerHeight - 200 - padding));
        }
      }
    }

    if (bottom !== undefined) {
      if (bottom + 200 > window.innerHeight - padding) {
        // Switch to bottom if there's more space there
        if (window.innerHeight - targetRect.bottom > targetRect.top) {
          bottom = undefined;
          top = targetRect.bottom + gap;
        } else {
          bottom = Math.max(padding, Math.min(bottom, window.innerHeight - 200 - padding));
        }
      }
    }

    if (left !== undefined) {
      if (left + 300 > window.innerWidth - padding) { // 300 is maxWidth
        // Switch to right side if there's more space there
        if (targetRect.left > window.innerWidth - targetRect.right) {
          left = undefined;
          right = window.innerWidth - targetRect.left + gap;
        } else {
          left = Math.max(padding, Math.min(left, window.innerWidth - 300 - padding));
        }
      }
    }

    if (right !== undefined) {
      if (right + 300 > window.innerWidth - padding) {
        // Switch to left side if there's more space there
        if (window.innerWidth - targetRect.right > targetRect.left) {
          right = undefined;
          left = targetRect.right + gap;
        } else {
          right = Math.max(padding, Math.min(right, window.innerWidth - 300 - padding));
        }
      }
    }

    return {
      ...style,
      top: top !== undefined ? `${top}px` : undefined,
      bottom: bottom !== undefined ? `${bottom}px` : undefined,
      left: left !== undefined ? `${left}px` : undefined,
      right: right !== undefined ? `${right}px` : undefined,
      transform
    };
  };

  return (
    <>
      {/* Overlay - increased z-index */}
      <div className="fixed inset-0 bg-black/50 z-[9999]" onClick={handleComplete} />
      
      {/* Tooltip - increased z-index */}
      <div
        className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 z-[9999] transition-opacity duration-300 ${
          step.target === '[data-tour="timeline"]' ? 'w-full max-w-[400px]' : ''
        }`}
        style={getTooltipStyle()}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
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
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
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