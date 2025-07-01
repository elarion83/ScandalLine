import React, { useState, useEffect } from 'react';
import Timeline from './components/Timeline';
import { TimelineProvider } from './contexts/TimelineContext';
import { allScandals } from './data';
import OnboardingTour from './components/modals/OnboardingTour';
import { HelpCircle } from 'lucide-react';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // Check if it's the first visit
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    localStorage.setItem('hasSeenOnboarding', 'true');
  };

  return (
    <TimelineProvider>
      <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            <Timeline scandals={allScandals} />
        {showOnboarding && <OnboardingTour onComplete={handleOnboardingComplete} />}
        
        {/* Help button */}
        <button
          onClick={() => setShowOnboarding(true)}
          className="fixed bottom-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          title="Aide"
        >
          <HelpCircle className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </TimelineProvider>
  );
}

export default App;