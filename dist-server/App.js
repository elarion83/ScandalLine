import React from 'react';
import Timeline from './components/Timeline';
import { TimelineProvider } from './contexts/TimelineContext';
import { allScandals } from './data';
function App() {
    // Utiliser les données initiales du serveur si elles existent
    const initialData = window.__INITIAL_DATA__;
    return (<TimelineProvider initialContext={initialData ? { type: initialData.type, value: initialData.value } : undefined}>
      <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Timeline scandals={initialData?.scandals || allScandals}/>
      </div>
    </TimelineProvider>);
}
export default App;
