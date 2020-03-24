import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, logout } from 'store-redux/actions/auth';
import { Button } from 'components/generic';

const Auth = ({ auth, login, logout }) => (
  <>
    <h5>redux-state</h5>
    {auth.isAuthenticated
      ? <Button onClick={logout} button={{ label: 'Log out', title: 'Log out' }} />
      : <Button onClick={login} button={{ label: 'Log in', title: 'Log in' }} />}
  </>
);

Auth.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.exact({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
