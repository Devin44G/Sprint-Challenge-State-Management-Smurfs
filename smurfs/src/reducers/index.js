import { GET_DATA, ADD_SMURF, SET_ERROR, POST_DATA } from '../actions';


const initialState = {
    smurfs: [],
    isFetchingData: false,
    error: ""
}

export const smurfReducer = (state= initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true,
            };

        case ADD_SMURF:
            return {
                ...state,
                isFetchingData: false,
                smurfs: action.payload
            };

        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };

        case POST_DATA:
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ]
            };

        default:
            return state;
    }
};
