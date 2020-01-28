import axios from 'axios';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authStart = () => {
    return {
        type: AUTH_START
    };
};

export const authSuccess = (token, userId, url) => {
    return {
        type: AUTH_SUCCESS,
        payload: {
            token: token, 
            userId: userId,
            url: url
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
        }, expirationTime);
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
                dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime()));
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
            password: password
        };
        axios.post(`http://localhost:8080/auth/signin`, authData)
            .then( response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(response.data.token, response.data.userId, '/admin-4h_ands'));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            }).catch(error => {
                console.log(error.message);
                dispatch(authFailure(error));
            });
    };
};

export const signup = (name, email, password, pushToAdminPage) => {
    return dispatch => {
        const signupData = {
            name,
            email,
            password
        };
        axios.post('http://localhost:8080/auth/signup', signupData)
            .then(res => {
                return dispatch(auth(signupData.email, signupData.password));
            })
            .then(() => {
                pushToAdminPage();
            })
            .catch(err => console.log(err));
    }
};


