import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { adblockCompatibility } from './utils/adblockCompatibility';

// Initialiser la compatibilité avec les adblocks
adblockCompatibility.applyAntiDetectionStyles();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
