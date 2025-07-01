import React, { useEffect } from 'react';
import Timeline from './components/Timeline';
import { TimelineProvider } from './contexts/TimelineContext';
import { allScandals } from './data';
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

function App() {
  // Utiliser les données initiales du serveur si elles existent
  const initialData = window.__INITIAL_DATA__;

  useEffect(() => {
    // Gérer la navigation dans l'historique
    const handlePopState = () => {
      const match = window.location.pathname.match(/^\/timeline\/(.+)$/);
      if (match) {
        const slug = match[1];
        const name = slugToName(slug);
        
        // Ne recharger que si on n'a pas déjà les données pour cette personnalité
        if (!initialData || initialData.value !== name) {
          window.location.href = `/timeline/${slug}`;
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [initialData]);

  // Si pas de données initiales, vérifier l'URL
  useEffect(() => {
    if (!initialData) {
      const match = window.location.pathname.match(/^\/timeline\/(.+)$/);
      if (match) {
        const slug = match[1];
        const name = slugToName(slug);
        
        // Rediriger vers le serveur Node.js pour obtenir les méta tags
        window.location.href = `/timeline/${slug}`;
      }
    }
  }, [initialData]);

  return (
    <TimelineProvider initialContext={initialData ? { type: 'personality', value: initialData.value } : undefined}>
      <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Timeline scandals={initialData?.scandals || allScandals} />
      </div>
    </TimelineProvider>
  );
}

export default App;