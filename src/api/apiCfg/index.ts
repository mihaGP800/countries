import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://restcountries.com/v2/',
  // withCredentials: true,
});
