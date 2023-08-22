import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route } from "react-router-dom";
import Hero from './pages/Hero.tsx';
import Settings from './pages/Settings.tsx';
import Game from './pages/Game.tsx';
import NotFound from './pages/NotFound.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Route>
        <Route path="/" element={<Hero />}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
    </Route>
    <App />
  </React.StrictMode>,
)
