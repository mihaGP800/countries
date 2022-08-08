import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {AppRouter} from './routes/AppRouter';

function App() {
    return (
        <>
            <Header/>
            <Main>
                <AppRouter/>
            </Main>
        </>
    );
}

export default App;
