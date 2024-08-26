import React from 'react';
import ReactDOM from 'react-dom/client';

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import App from './App.tsx';

const theme = createTheme({
  typography: {
    fontFamily: "Noto Serif TC, serif",
  },
  palette: {
    primary: {
      light: '#E9DB5D',
      main: '#E3D026',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
)
