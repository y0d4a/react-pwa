import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.scss';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Loading from '../../../common/Loading';
import { getCates } from '../../../actions/categories';

class HeaderComponent extends React.Component {

    render() {
        const { categories : { isFetching, data } } = this.props;
        if (isFetching) {
            return <Loading />
        }
        return (
            <nav className="d-header">
                <div>
                    <DrawerToggleButton click={this.props.drawerClickHandler}/>
                </div>
                <div className="d-logo"><Link to="/" arial-label="Home Page"><img src="/images/anonymous.png" alt="" /></Link></div>
                <div className="spacer" />
                <ul className="d-menu-main">
                    <li><Link to="/" arial-label="Home Page">Home</Link></li>
                    {
                        data.map(category => (
                            <li key={category._id}><Link to={`/posts/${category._id}`} arial-label="Category Page">{category.name}</Link></li>
                        ))
                    }
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

export default connect(mapStateToProps, null)(HeaderComponent);