import { LOG_OUT_USER } from './types';

const initialState = {
    user: null,
    loggedIn: false,
    authenticatingUser: false,
    failedLogin: false,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_CURRENT_USER':
            return { 
                ...state, 
                user: action.payload, 
                loggedIn: true, 
                authenticatingUser: false
            }
        case 'AUTHENTICATING_USER':
            return { 
                ...state, 
                authenticatingUser: true 
            }
        case 'AUTHENTICATED_USER':
            return { 
                ...state, 
                authenticatingUser: false 
            }
        case 'FAILED_LOGIN':
            return {
                ...state,
                failedLogin: true,
                error: action.payload,
                authenticatingUser: false
            }
        case LOG_OUT_USER:
            return {
                ...state,
                loggedIn: action.payload
            }
        default:
            return state
    }
}

export default userReducer