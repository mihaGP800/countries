import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {IoArrowBack} from "react-icons/io5";
import {Button} from '../components/Button';
import {Info} from '../components/Info';
import {BACK} from '../constant';
import {useAppDispatch, useAppSelector} from '../store/store';
import {getCountryByName} from '../store/countriesReducer';

export const Details = () => {
    const {name} = useParams()
    const navigate = useNavigate()

    const country = useAppSelector(state => state.countries.country)
    const dispatch = useAppDispatch()

    useEffect(() => {
        name && dispatch(getCountryByName(name))
    }, [name])

    const goBackHandle = () => navigate(BACK)

    return (
        <div>
            <Button onClick={goBackHandle}>
                <IoArrowBack/>Back
            </Button>
            {country && <Info country={country}/>}
        </div>
    );
}