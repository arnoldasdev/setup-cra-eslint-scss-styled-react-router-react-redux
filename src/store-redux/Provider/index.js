import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'store-redux/reducers';

/* eslint-disable no-underscore-dangle */

export const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined,
);

const Container = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
