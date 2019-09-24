import React, {Component} from 'react';
import { connect } from 'react-redux';
import './index.scss';
import LazyLoad from 'react-lazy-load';
import ImageLoader from '../../functional/ImageLoader';
import RemainPostDashboard from './items';
import { getPosts } from '../../../actions/posts';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    render() {
        const { newestPosts } = this.props;
        if (newestPosts && newestPosts.length > 0) {
            const remainPost = newestPosts.filter(p => p._id !== newestPosts[0]._id);
            return (
                <div className="wrapper">
                    <section className="d-top-container">
                        <header className="showcase animated bounceInLeft">
                            <div className="poster">
                                <LazyLoad>
                                    <ImageLoader src={newestPosts && newestPosts[0].image}/>
                                </LazyLoad>
                            </div>
                            <div className="details">
                                <h1>
                                    <Link arial-label="Home Page Newest Posts" to={`/categories/${newestPosts[0].category_id}/posts/${newestPosts[0]._id}/details`}>
                                        {newestPosts && newestPosts[0].title}
                                    </Link>
                                </h1>
                                <p>{newestPosts && newestPosts[0].description}</p>
                            </div>
                        </header>
                        <div className="d-top-box">
                            {
                                <RemainPostDashboard remainPost={remainPost} />
                            }
                        </div>
                    </section>
                </div>
            )
        }
        return null;
    }

    componentDidMount() {
        if (!this.props.newestPosts || this.props.newestPosts.length === 0) {
            this.props.getNewestPosts();
        }
    }
}

const mapStateToProps = state => {
    return {
        // Due to getNewPosts so categoryId === null
        newestPosts: !state.posts.data.categoryId ? state.posts.data.data : []
    }
}

const mapDispatchToProps = dispatch => ({
    getNewestPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);