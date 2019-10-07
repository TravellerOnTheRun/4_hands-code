import * as actions from './actions';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case actions.AUTH_START:
            return {
                ...state,
                error: null,
                loading: true
            };
        case actions.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                error: null,
                loading: false
            };
        case actions.AUTH_FAILURE:
            return { ...state, error: action.error, loading: false };
        case actions.AUTH_LOGOUT:
            return { ...state, token: null, userId: null };
        default:
            return state;
    };
};

export default reducer;