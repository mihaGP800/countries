import {countriesAPI, CountriesResponseType, CountryItem} from '../api/coutriesApi';
import {ThunkApp} from './store';
import {setError, setIsLoading} from './appReducer';
import {AxiosError} from 'axios';

const initialState = {
    countries: [] as CountriesResponseType,
    country: null as CountryItem | null,
    countriesNames: [] as string[]
}
type CountriesStateType = typeof initialState

export const countriesReducer = (state: CountriesStateType = initialState,
                                 {type, payload}: CountriesActionType,
): CountriesStateType => {
    switch (type) {
        case 'COUNTRIES/GET-COUNTRIES':
        case 'COUNTRIES/GET-COUNTRY-BY-NAME':
        case 'COUNTRIES/GET-COUNTRIES-BY-CODES':
            return {...state, ...payload}
        default:
            return state
    }
}

export const fetchCountriesAC = (countries: CountriesResponseType) =>
    ({type: 'COUNTRIES/GET-COUNTRIES', payload: {countries},} as const);

export const getCountryByNameAC = (country: CountryItem) =>
    ({type: 'COUNTRIES/GET-COUNTRY-BY-NAME', payload: {country},} as const);

export const getCountriesByCodesAC = (countriesNames: string[]) =>
    ({type: 'COUNTRIES/GET-COUNTRIES-BY-CODES', payload: {countriesNames},} as const);


export const fetchCountries = (): ThunkApp => async dispatch => {
    dispatch(setIsLoading(true));
    try {
        const data = await countriesAPI.getAll()
        dispatch(fetchCountriesAC(data));
    } catch (e) {
        dispatch(setError((e as AxiosError).message));
    } finally {
        dispatch(setIsLoading(false));
    }
};

export const getCountryByName = (name: string): ThunkApp => async dispatch => {
    dispatch(setIsLoading(true));
    try {
        const data = await countriesAPI.getCountryByName(name)
        dispatch(getCountryByNameAC(data[0]));
    } catch (e) {
        dispatch(setError((e as AxiosError).message));
    } finally {
        dispatch(setIsLoading(false));
    }
};

export const getCountriesByCodes = (borders: string[]): ThunkApp => async dispatch => {
    dispatch(setIsLoading(true));
    try {
        const data = await countriesAPI.getCountriesByCodes(borders)
        dispatch(getCountriesByCodesAC(data.map(c => c.name)));
    } catch (e) {
        dispatch(setError((e as AxiosError).message));
    } finally {
        dispatch(setIsLoading(false));
    }
};


export type CountriesActionType =
    ReturnType<typeof fetchCountriesAC>
    | ReturnType<typeof getCountryByNameAC>
    | ReturnType<typeof getCountriesByCodesAC>

