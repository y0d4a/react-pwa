import React from 'react';
import { connect }  from 'react-redux';
import HeaderComponent from './class/Header';
import ContentComponent from './class/Content';
import './App.scss';
import SideDrawer from './class/SideDrawer';
import BackDrop from './class/BackDrop';
import {getCategories, getCates} from '../actions/categories';
// import FooterComponent from './class/Footer';
import FlashScreen from './functional/FlashScreen';

class App extends React.Component {

    state = {
        sideDrawerOpen: false,
        renderFlashScreen: true
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    }

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    }

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <BackDrop click={this.backdropClickHandler}/>;
        }

        let app;

        if (this.state.renderFlashScreen) {
            app = <FlashScreen />;
        } else {
            app = <React.Fragment>
                    <HeaderComponent
                        drawerClickHandler={this.drawerToggleClickHandler}
                    />
                    <SideDrawer
                        show={this.state.sideDrawerOpen}
                    />
                    {backdrop}
                    <main style={{marginTop: '64px'}}>
                        <ContentComponent />
                    </main>
                </React.Fragment>;
        }

        return (
            <div style={{height: '100%'}}>
                    {app}
                    {/* <FooterComponent /> */}
            </div>
        );
    }

    componentDidMount() {
        if (!this.props.categories.isFetching) {
            this.props.getCategories();
            this.setState({ renderFlashScreen: false });
        }
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
};

const mapDispatchToProps = dispatch => ({
    getCategories: () => 
        dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);