import { React } from 'react'
import './App.css';
import Headers from './components/Headers'
import MainPage from './components/MainPage'

function App() {
    return (
        <div className="App">
            <Headers/>
            <MainPage className="content"/>
        </div>
    );
}

export default App;
