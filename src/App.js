import { React, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components';
import './App.css';
import Headers from './components/Headers'
import MainPage from './components/MainPage'
// import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import axios from 'axios';
import { Button } from '@material-ui/core';

function App() {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className="App">
                {/* <Button onClick={notify}> Click Me </Button> */}
                <Headers theme={theme} toggleTheme={themeToggler}/>
                <MainPage theme={theme} className="content"/>
            </div>
        </ThemeProvider>
    );
}

export default App;
