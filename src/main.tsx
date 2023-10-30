import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AppRouteProvider } from './context/AppRouteProvider.tsx';
import { GlobalStyled } from './styles/GlobalStyled.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouteProvider>
        <GlobalStyled />
        <App />
      </AppRouteProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
