import {instance} from './apiCfg';

const filterFields: string[] = ['name', 'capital', 'flags', 'population', 'region' ]

export const countriesAPI = {
    getAll: () => instance.get<CountriesResponseType>('all', {params: {fields: filterFields.join(',')}}).then(res => res.data),

    getCountryByName: (name: string) =>
        instance.get(`name/${name}`, {}).then(res => res.data),

    getCountryByCodes: (codesAll: number[]) =>
        instance
            .get(`alpha`, {params: {codes: codesAll.join(',')}})
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
