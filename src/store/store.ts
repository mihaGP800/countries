import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {AppActionType, appReducer} from './appReducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {CountriesActionType, countriesReducer} from './countriesReducer';

const rootReducer = combineReducers({
    app: appReducer,
    countries: countriesReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppRootStateType = ReturnType<typeof store.getState>;

export type AppRootActionType = AppActionType | CountriesActionType

export type ThunkApp<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppRootActionType>;

export type TypedDispatch = ThunkDispatch<AppRootStateType, unknown, AppRootActionType>;

export const useAppDispatch = (): TypedDispatch => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;