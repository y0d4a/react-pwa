import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../shared/components/App';
import './index.scss';
import appReducers from '../shared/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(appReducers, preloadedState, applyMiddleware(thunk));

const renderRouter = Component => {
  ReactDOM.hydrate(
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>,
      document.getElementById('root')
  )
};

renderRouter(App);