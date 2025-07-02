import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
var rootElement = document.getElementById('root');
if (!rootElement)
    throw new Error('Failed to find the root element');
createRoot(rootElement).render(React.createElement(StrictMode, null,
    React.createElement(App, null)));
