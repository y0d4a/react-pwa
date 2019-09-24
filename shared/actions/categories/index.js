import REST_API from '../../utils/API';
import API from '../../constants/API'

const actionTypes = {
    REQUEST_CATEGORIES: 'CATEGORIES@REQUEST_CATEGORIES',
    RECEIVE_CATEGORIES: 'CATEGORIES@RECEIVE_CATEGORIES'
}

export const getCategories = () => async dispatch => {
    try {
        await dispatch({ type: actionTypes.REQUEST_CATEGORIES });
        const res = await REST_API.get(API.CATEGORY.CATEGORIES);
        await dispatch({ type: actionTypes.RECEIVE_CATEGORIES, payload: res.data.data });    
    } catch(e) {
        await dispatch({ type: actionTypes.RECEIVE_CATEGORIES, payload: [] });
    }
}

export const getCates = ({ categories }) => categories;

export {actionTypes};