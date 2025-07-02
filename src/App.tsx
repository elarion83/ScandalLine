import React, { useState, useEffect } from 'react';
import Timeline from './components/Timeline';
import { TimelineProvider } from './contexts/TimelineContext';
import SplashScreen from './components/SplashScreen';
import allScandals from './data';
import { createContextualFilter } from './utils/contextualFilters';
import { slugToName } from './utils/shareUtils';

// Déclarer le type pour les données initiales
declare global {
  interface Window {
    __INITIAL_DATA__?: {
      type: 'personality';
      value: string;
      scandals: typeof allScandals;
    };
  }
}

const App: React.FC = () => {
  // En développement, on n'affiche pas le splash screen
  // Ou si on arrive directement sur une route avec un slug
  const [showSplash, setShowSplash] = useState(() => {
    // Ne pas afficher le splash screen en développement
    if (!import.meta.env.PROD) return false;
    
    // Ne pas afficher le splash screen si on arrive directement sur une route avec un slug
    const path = window.location.pathname;
    if (path.startsWith('/timeline/') && path !== '/timeline/') {
      return false;
    }
    
    return true;
  });
  const [splashClosedTime, setSplashClosedTime] = useState<number | null>(null);

  const handleSplashComplete = (wantsTutorial: boolean) => {
    setShowSplash(false);
    setSplashClosedTime(Date.now());
  };

  // Utiliser les données initiales du serveur si elles existent
  const initialData = window.__INITIAL_DATA__;

  // Si pas de données initiales du serveur, parser l'URL pour détecter un slug
  const getInitialContext = () => {
    if (initialData) {
      console.log('🔍 Utilisation des données initiales du serveur:', initialData);
      return { type: 'personality', value: initialData.value };
    }

    // Parser le slug depuis l'URL si on est sur /timeline/nom
    const path = window.location.pathname;
    console.log('🔍 Pathname actuel:', path);
    
    if (path.startsWith('/timeline/') && path !== '/timeline/') {
      const slug = path.replace('/timeline/', '');
      console.log('🔍 Slug extrait:', slug);
      
      if (slug) {
        const name = slugToName(slug);
        console.log('🔍 Nom converti depuis le slug:', name);
        console.log('🔍 Création du contexte pour:', { type: 'personality', value: name });
        return { type: 'personality', value: name };
      }
    }

    console.log('🔍 Aucun contexte initial détecté');
    return undefined;
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <TimelineProvider initialContext={getInitialContext()}>
        <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <Timeline scandals={initialData?.scandals || allScandals} splashClosedTime={splashClosedTime} />
        </div>
      </TimelineProvider>
    </>
  );
};

export default App;