import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PropertiesProvider } from './context/PropertiesContext.jsx';
import App from './App.jsx'
import './index.css'
import "leaflet/dist/leaflet.css";
import "./utils/leafletIcon";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PropertiesProvider>
      <App/>
    </PropertiesProvider>
  </StrictMode>
)
