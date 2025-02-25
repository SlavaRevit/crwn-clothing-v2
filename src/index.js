import React from 'react';
import './index.scss';
import App from './App';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router";


const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
