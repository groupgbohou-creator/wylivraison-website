import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGlobalAnalyticsListeners } from './utils/analytics';

// Suivi GA4 de tous les clics sortants (stores, WhatsApp, Instagram, contact, portail partenaire)
initGlobalAnalyticsListeners();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
