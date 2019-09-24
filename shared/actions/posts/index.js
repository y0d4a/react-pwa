import REST_API from '../../utils/API';
import API from '../../constants/API'

const actionTypes = {
    REQUEST_POSTS: 'POSTS@REQUEST_POSTS',
    RECEIVE_POSTS: 'POSTS@RECEIVE_POSTS',
    REQUEST_POST: 'POSTS@REQUEST_POST',
    RECEIVE_POST: 'POSTS@RECEIVE_POST'
}

export const getPosts = (categoryId = null) => async dispatch => {
    try {
        await dispatch({ type: actionTypes.REQUEST_POSTS });
        const res = await REST_API.get(API.POST.POSTS, { params: { cid: categoryId}});
        const payload = {
            categoryId: categoryId,
            data: res.data.data
        };
        await dispatch({ type: actionTypes.RECEIVE_POSTS, payload: payload });    
    } catch(e) {
        await dispatch({ type: actionTypes.RECEIVE_POSTS, payload: [] });
    }
}

export const getDetailsPost = (cid, pid) => async dispatch => {
    try {
        await dispatch({ type: actionTypes.REQUEST_POST });
        const res = await REST_API.get(`${API.CATEGORY.CATEGORY_ID(cid)}${API.POST.POST_DETAILS(pid)}`);
        await dispatch({ type: actionTypes.RECEIVE_POST, payload: res.data.data });    
    } catch(e) {
        await dispatch({ type: actionTypes.RECEIVE_POST, payload: [] });
    }
}

export {actionTypes};