import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

import SettingsContextProvider from './Context/settingsContext.js';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <SettingsContextProvider>
        <App />
      </SettingsContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
