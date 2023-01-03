import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
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
        custom_black:{
            main: '#000000'
        }
    }
}); 


function App(){
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => setLoading(false), 1000)
    }, [])

    window.addEventListener("resize", () => {
      document.querySelector(".sub-grid-height-1").classList.add("resize-animation-stopper");
    });


    return (
       <ThemeProvider theme={ theme }>
        {loading ? 
        (<Loading/>) :
            (<div className='App'>
                <div id="background" className='background'/>
                <Header/>
                <React.StrictMode>
                    <main>
                        <Home/>
                        <About/>
                        <Experience/>
                        <Projects/>
                    </main>
                </React.StrictMode>
                <Footer/>
            </div>)}
        </ThemeProvider>
    )
    
}

export default App