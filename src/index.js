import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/settingsContext';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
// import AuthProvider from './Auth';

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles with withNormalizeCSS>
      {/* <AuthProvider> */}
        <SettingsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SettingsProvider>
      {/* </AuthProvider> */}
    </MantineProvider>
  </React.StrictMode>
);
