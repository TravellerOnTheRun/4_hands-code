import axios from 'axios';

//Constants from  sending requests
const API_KEY = 'AIzaSyCUq_GtMEmXerw9McKq70WaAmqD8YBK1rY';
const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`;

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authStart = () => {
    return {
        type: AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: AUTH_SUCCESS,
        payload: {
            token: token, 
            userId: userId
        }
    };
};

export const authFailure = error => {
    return {
        type: AUTH_FAILURE,
        error: error
    };
}; 

export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        }, expirationTime * 1000);
    };
};
export const checkAutheticationState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if(!token) dispatch(authLogout());
        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate > new Date()) {
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            } else {
                dispatch(authLogout());
            };
        }
    };
};

export const auth = ( email, password ) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios.post(`${url}${API_KEY}`, authData)
            .then( response => {
                console.log(response.data);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            }).catch(error => {
                console.log(error.message);
                dispatch(authFailure(error));
            });
    };
};


