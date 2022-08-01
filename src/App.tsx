import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Controls} from './components/controls/Controls';

function App() {
    return (
        <>
            <Header/>
            <Main>
                <Controls/>
            </Main>
        </>
    );
}

export default App;
