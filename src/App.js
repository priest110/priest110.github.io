import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: [
          'Merriweath',
          'serif',
        ].join(','),
    },
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#AA4A44',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#FFFFFF',
          },
    }
});

function App(){
    return (
        <ThemeProvider theme={ theme }>
            <div className='App'>
                <Header/>
                <React.StrictMode>
                    <Home/>
                </React.StrictMode>
            </div>
        </ThemeProvider>
    )
}

export default App;