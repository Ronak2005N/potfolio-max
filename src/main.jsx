import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import 'lenis/dist/lenis.css';
import { prepareSmoothScrollEnvironment } from './utils/animations';

const rootElement = document.getElementById('root');

prepareSmoothScrollEnvironment();

if (!rootElement) {
  throw new Error('Root element #root was not found.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
