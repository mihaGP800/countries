import React, {useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {AppRoutePaths} from './appRoutes';
import {HomePage} from '../pages/HomePage';
import {Details} from '../pages/Details';
import {NotFound} from '../pages/NotFound';
import {CountriesResponseType} from '../api/coutriesApi';

type AppRouterType = {
    countries: CountriesResponseType
    setCountries: (countries: CountriesResponseType) => void
}

export const AppRouter: React.FC<AppRouterType> = (props) => {

    return (
        <Routes>
            <Route path={AppRoutePaths.HOMEPAGE} element={<HomePage {...props}/>}/>
            <Route path={AppRoutePaths.DETAILS} element={<Details/>}/>
            <Route path={AppRoutePaths.NOT_FOUND} element={<NotFound/>}/>
            <Route path={AppRoutePaths.RANDOM}
                   element={<Navigate to={AppRoutePaths.NOT_FOUND}/>}/>
        </Routes>
    );
}