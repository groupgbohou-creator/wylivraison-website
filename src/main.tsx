import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGlobalAnalyticsListeners } from './utils/analytics';

// Initialize global Google Analytics 4 tracking listeners
initGlobalAnalyticsListeners();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
