import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { CountryProvider } from './utils/CountryContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <CountryProvider>
    <App />
  </CountryProvider>
);
