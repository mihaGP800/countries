import React, {useEffect, useState} from 'react';
import {Controls} from '../components/controls/Controls';
import {List} from '../components/List';
import {Card} from '../components/Card';
import {CountriesResponseType} from '../api/coutriesApi';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../store/store';
import {fetchCountries} from '../store/countriesReducer';

type HomePageType = {}

export const HomePage: React.FC<HomePageType> = () => {

    const countries = useAppSelector(state => state.countries.countries)
    const isLoading = useAppSelector(state => state.app.isLoading)

    const dispatch = useAppDispatch()


    let [filteredCountries, setFilteredCountries] = useState<CountriesResponseType>([])
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchCountries())
    }, [])

    useEffect(() => {
        setFilteredCountries(countries)
    }, [countries])

    const searchHandle = (search: string, region: string) => {
        let data = [...countries]

        if (search) data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

        if (region) data = data.filter(c => c.region === region)

        setFilteredCountries(data)
    }
    return (
        <>
            <Controls searchHandle={searchHandle}/>
            <List>
                {filteredCountries.map(c => {
                    const navigateHandle = () => navigate(`country/${c.name}`)
                    return <Card key={c.name}
                                 name={c.name}
                                 img={c.flags.png}
                                 info={[
                                     {
                                         title: 'Population',
                                         description: c.population.toLocaleString()
                                     },
                                     {title: 'Region', description: c.region},
                                     {title: 'Capital', description: c.capital},
                                 ]}
                                 onClick={navigateHandle}
                                 disabled={isLoading}
                    />
                })}
            </List>
        </>
    );
}