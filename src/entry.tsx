import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './views/app';
import configureStore from './store';

const render = () => {
  const store = configureStore();
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container
  );
};

render();
