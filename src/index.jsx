import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './components/AppContainer';
import aircheapStore from './store/index';

ReactDOM.render(
  <Provider store={aircheapStore}>
    <AppContainer />
  </Provider>,
  document.getElementById('main')
);
