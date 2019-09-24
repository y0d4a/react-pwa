import { combineReducers } from "redux";
import categoryReducers from '../reducers/categories';
import postsReducer from '../reducers/posts';
import postReducer from '../reducers/posts/post';

const appReducers = combineReducers({
    categories: categoryReducers,
    posts: postsReducer,
    post: postReducer
});

export default appReducers;