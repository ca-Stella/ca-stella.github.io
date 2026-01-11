import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

import './index.css'
import App from './App.tsx'
import './styles/fonts.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
