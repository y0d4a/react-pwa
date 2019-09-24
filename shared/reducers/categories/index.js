import { actionTypes } from '../../actions/categories';


const INITIAL_STATE = {
    data: [],
    isFetching: false,
    lastUpdate: Date.now()
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_CATEGORIES:
            return { ...state, isFetching: true};
        case actionTypes.RECEIVE_CATEGORIES:
            return { ...state, isFetching: false, data: action.payload};
        default:
            return state;
    }
};