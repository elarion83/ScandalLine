import React from 'react';
import Timeline from './components/Timeline';
import { TimelineProvider } from './contexts/TimelineContext';
import { allScandals } from './data';

function App() {
  return (
    <TimelineProvider>
      <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Timeline scandals={allScandals} />
      </div>
    </TimelineProvider>
  );
}

export default App;