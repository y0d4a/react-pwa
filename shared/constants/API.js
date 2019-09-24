const API = {
    POST: {
        POSTS: '/posts',
        POST_DETAILS: (pid) => `/posts/${pid}/details` 
    },
    CATEGORY: {
        CATEGORIES: '/categories',
        CATEGORY_ID: (cid) => `/categories/${cid}`
    }
};

export default API;