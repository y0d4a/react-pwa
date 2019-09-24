import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.scss';
import Loading from '../../../common/Loading';
import { getCates } from '../../../actions/categories';

class SideDrawer extends React.Component {

    state = {
        drawerClasses: 'd-sidedrawer'
    }

    render() {

        const { categories: { isFetching, data } } = this.props;
        if (isFetching) {
            return <Loading />;
        }
        const drawerClass = this.props.show ? `${this.state.drawerClasses} open` : this.state.drawerClasses;
        return (
            <nav className={drawerClass}>
                <ul>
                    <li>
                        <Link to="/" arial-label="Home Page">Categories</Link>
                        <ul>
                            {
                                data.map(category => (
                                    <li key={category._id}><Link to={`/posts/${category._id}`} arial-label="Category Page">{category.name}</Link></li>
                                ))
                            }
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: getCates(state)
    }
}

export default connect(mapStateToProps, null)(SideDrawer);