import store from '../shared/store';
import render from './render';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { getCategories } from '../shared/actions/categories';
import App from '../shared/components/App';

export default function renderRoute(req, res) {
  if (req.url === '/') {
    store.dispatch(getCategories())
         .then(() => handleRender(req, res))
         .catch(console.error);
  } else {
    handleRender(req, res);
  }
  
  function handleRender(req, res) {
    const preloadedState = store.getState();
    const content = renderToString(
      <Provider store={store}>
          <StaticRouter location={req.url}>
              <App />
          </StaticRouter>
      </Provider>
    );
    return res.send(render(content, preloadedState));
  }
}