import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './hooks/useThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
