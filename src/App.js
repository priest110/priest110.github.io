import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: [
          'Merriweath',
          'serif',
        ].join(','),
        button: {
            textTransform: "none",
        },
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
                <div className='background'/>
                <Header/>
                <React.StrictMode>
                    <main>
                        <Home/>
                        <About/>
                        <Experience/>
                    </main>
                </React.StrictMode>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default App;