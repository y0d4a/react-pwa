import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss';
import { getPosts } from '../../../actions/posts';
import RemainPosts from './items';


class Posts extends React.Component {

    render() {
        const {posts} = this.props;
        if (posts && posts.length > 0) {
            const newPost = posts[0];
            const remainPosts = newPost ? posts.filter(p => p._id !== newPost._id) : null;
            return (
                <div className="d-posts">
                    <div className="d-posts-left">
                        <div className="d-posts-left-new-subject">
                            <img src={newPost ? newPost.image : ''} alt=""/>
                            <h3>
                                <Link arial-label="Details Post" to={`/categories/${newPost.category_id}/posts/${newPost ? newPost._id : ''}/details`}>
                                    {newPost ? newPost.title : ''}
                                </Link>
                            </h3>
                        </div>
                    </div>
                    <div className="d-posts-right">
                        {
                            <RemainPosts remainPosts={remainPosts}/>
                        }
                    </div>
                </div>
            );
        }
        return null;
    }

    componentDidMount() {
        if (!this.props.posts || this.props.posts.length === 0) {
            this.props.getPosts(this.props.match.params.cname);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.cname !== this.props.match.params.cname) {
            this.props.getPosts(this.props.match.params.cname);
        }
    }
}


const mapStateToProps = state => {
    return {
        posts: state.posts.data.categoryId ? state.posts.data.data : []
    }
}

const mapDispatchToProps = dispatch => ({
    getPosts: (categoryId) => dispatch(getPosts(categoryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);