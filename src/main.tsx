
import { createRoot } from 'react-dom/client'
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import App from './App.tsx'
import './index.css'

// Call this to initialize the PWA elements for Capacitor functionality
defineCustomElements(window);

createRoot(document.getElementById("root")!).render(<App />);
