import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import ImageLoader from '../../functional/ImageLoader';

const RemainPostDashboard = props => {
    if (props.remainPost) {
        return (
            <React.Fragment>
                {
                    props.remainPost.map((newestPost, index) => (
                        <div className={`d-top-box-a animated bounceInRight`} 
                             key={newestPost._id}
                             style={{ animationDelay: `${0.5*index}s` }}>
                            <LazyLoad>
                                <ImageLoader src={newestPost.image}/>
                            </LazyLoad>
                            <div className="d-top-box-a-text">
                                <h4>{newestPost.title}</h4>
                                <Link arial-label="Details Post" to={`/categories/${newestPost.category_id}/posts/${newestPost._id}/details`} className="btn">Read More</Link>
                            </div>
                        </div>
                    ))
                }
            </React.Fragment>
        )
    }
    return null;
};

export default RemainPostDashboard;