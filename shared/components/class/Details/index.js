import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { getDetailsPost } from '../../../actions/posts';

class DetailsComponent extends React.Component {

    getPostData = () => {
        const pid = this.props.match.params.pid;
        return this.props.posts ? this.props.posts.filter(post => post._id === pid)[0] : this.props.post;
    }

    render() {
        const post = this.getPostData();
        return (
            <section className="d-details">
                <h1>{post && post.title}</h1>
                <h4 className="d-details-description">
                    {post && post.description}
                </h4>
                <img src={post && post.image} alt="" />
                <div>
                    <p>{post && post.content}</p>
                </div>
            </section>
        );
    }

    componentDidMount() {
        if (!this.props.posts || this.props.posts.length === 0) {
            this.props.getDetailsPost(this.props.match.params.cid, this.props.match.params.pid);
        }
    }
}

const mapStateToProps = state => ({
    posts: state.posts.data.data,
    post: state.post.data
});

const mapDispatchFromProps = dispatch => ({
    getDetailsPost: (cid, pid) => dispatch(getDetailsPost(cid, pid))
});

export default connect(mapStateToProps, mapDispatchFromProps)(DetailsComponent);