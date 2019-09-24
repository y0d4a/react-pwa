import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const RemainPosts = (props) => {
    if (props.remainPosts) {
        return (
            <ul>
                {
                    props.remainPosts.map((post, index) => (
                        <li key={post._id} className={`animated bounceInRight`} style={{animationDuration: `${0.5*index}s`}}>
                            <LazyLoad>
                                <img src={post.image} alt=""/>
                            </LazyLoad>
                            <p>
                                <Link arial-label="Details Post" to={`/categories/${post.category_id}/posts/${post._id}/details`}>
                                    {post.title}
                                </Link>
                            </p>
                        </li>
                    ))
                }
            </ul>
        )
    }
    return null
};

export default RemainPosts;