import {EMPTY_STRING} from '../constant';

const initialState = {
    isLoading: false,
    error: EMPTY_STRING
}
type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState,
                           {type, payload}: AppActionType,
): AppStateType => {
    switch (type) {
        case 'APP/SET-IS-LOADING':
        case 'APP/SET-IS-ERROR':
            return {...state, ...payload}
        default:
            return state
    }
}

export const setIsLoading = (isLoading: boolean) =>
    ({type: 'APP/SET-IS-LOADING', payload: {isLoading},} as const);

export const setError = (error: string) =>
    ({type: 'APP/SET-IS-ERROR', payload: {error},} as const);

export type AppActionType = ReturnType<typeof setIsLoading> |
    ReturnType<typeof setError>