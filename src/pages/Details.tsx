import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components'
import {IoArrowBack} from "react-icons/io5";
import {AppRoutePaths} from '../routes/appRoutes';
import {countriesAPI, CountryItem, CountryResponseType} from '../api/coutriesApi';
import {Button} from '../components/Button';
import Info from '../components/Info';

export const Details = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState<CountryItem | null>(null)

    useEffect(() => {
        name && countriesAPI.getCountryByName(name)
            .then(data => {
                setCountry(data[0])
            })
    }, [name])

    const goBackHandle = () => {
        // navigate(AppRoutePaths.HOMEPAGE)
        navigate(-1)
    }



    return (
        <div>
            <Button onClick={goBackHandle}>
                <IoArrowBack/>Back
            </Button>
            {country && <Info country={country}/>}

        </div>
    );
}