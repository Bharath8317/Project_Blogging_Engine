import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DashboardPage1.css'
import App from './App';
import AppState from './Context/AppContext/AppState';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AppState>
    <App />
  </AppState>
  </BrowserRouter>
);
