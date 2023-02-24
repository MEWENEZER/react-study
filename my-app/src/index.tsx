import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// DOM елемент
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // StrictMode - нужно для обратной совместимости
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
