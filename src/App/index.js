import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from 'components/Layout';
import { Header, Footer } from 'components/views';
import { Authenticated, Login } from 'components/switches';
import './index.scss';

const App = ({ auth }) => (
  <div className="App" data-testid="App">
    <Router>
      {auth.isAuthenticated
        ? <Layout views={{ Content: Authenticated, Header, Footer }} />
        : <Layout views={{ Content: Login, Footer }} />}
    </Router>
  </div>
);

App.propTypes = {
  auth: PropTypes.exact({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
