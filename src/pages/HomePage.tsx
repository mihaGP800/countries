import React, {useEffect, useState} from 'react';
import {Controls} from '../components/controls/Controls';
import {List} from '../components/List';
import {Card} from '../components/Card';
import {countriesAPI, CountriesResponseType} from '../api/coutriesApi';
import {useNavigate} from 'react-router-dom';

type HomePageType = {
    countries: CountriesResponseType
    setCountries: (countries: CountriesResponseType) => void
}

export const HomePage: React.FC<HomePageType> = ({countries, setCountries}) => {

    let [filteredCountries, setFilteredCountries] = useState<CountriesResponseType>([])
    const navigate = useNavigate()

    useEffect(() => {
            countriesAPI.getAll().then(res => {
                setCountries(res)
                setFilteredCountries(res)
            })
    }, [])

    const searchHandle = (search: string, region: string) => {
        let data = [...countries]

        if (search) data = countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

        if (region) data = countries.filter(c => c.region === region)

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
                    />
                })}
            </List>
        </>
    );
}