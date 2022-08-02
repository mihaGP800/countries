import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {AppRouter} from './routes/AppRouter';
import {CountriesResponseType} from './api/coutriesApi';

function App() {
    const [countries, setCountries] = useState<CountriesResponseType>([])

    return (
        <>
            <Header/>
            <Main>
                <AppRouter countries={countries} setCountries={setCountries}/>
            </Main>
        </>
    );
}

export default App;
