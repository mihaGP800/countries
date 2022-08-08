import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {AppRouter} from './routes/AppRouter';
import {useAppSelector} from './store/store';
import {ProgressInfinite} from './components/ProgressInfinite/ProgressInfinite';
import {ErrorMessage} from './components/ErrorMessage/ErrorMessage';

function App() {

    const isLoading = useAppSelector(state => state.app.isLoading)
    const error = useAppSelector(state => state.app.error)
    return (
        <>
            <Header/>
            {isLoading && <ProgressInfinite/>}
            <Main>
                <AppRouter/>
                {error && <ErrorMessage/>}
            </Main>
        </>
    );
}

export default App;
