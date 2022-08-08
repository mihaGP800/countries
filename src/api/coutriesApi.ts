import {instance} from './apiCfg';

const filterFields: string[] = ['name', 'capital', 'flags', 'population', 'region']

export const countriesAPI = {
    getAll: () => instance.get<CountriesResponseType>('all', {params: {fields: filterFields.join(',')}}).then(res => res.data),

    getCountryByName: (name: string) =>
        instance.get<FoundCountriesResponseType>(`name/${name}`).then(res => res.data),

    getCountriesByCodes: (codesAll: string[]) =>
        instance
            .get<FoundCountriesResponseType>
            (`alpha`, {params: {codes: codesAll.join(',')}})
            .then(res => res.data),
}

export interface Flags {
    svg: string;
    png: string;
}

export interface RootDataItem {
    name: string;
    capital: string;
    region: string;
    population: number;
    flags: Flags;
    independent: boolean;
};

export type CountriesResponseType = RootDataItem[];

export interface Flags {
    svg: string;
    png: string;
}

export interface Currencies {
    code: string;
    name: string;
    symbol: string;
}

export interface Languages {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface Translations {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
}

export interface RegionalBlocs {
    acronym: string;
    name: string;
}

export interface CountryItem {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    subregion: string;
    region: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    flags: Flags;
    currencies: Currencies[];
    languages: Languages[];
    translations: Translations;
    flag: string;
    regionalBlocs: RegionalBlocs[];
    cioc: string;
    independent: boolean;
};
export type FoundCountriesResponseType = CountryItem[];
