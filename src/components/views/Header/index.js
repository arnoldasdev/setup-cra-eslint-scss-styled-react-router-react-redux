import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'store-redux/actions/auth';
import { Button } from 'components/generic';
import logo from 'logo.svg';
import './index.scss';

const Header = ({ logout }) => (
  <div className="view-Header">
    <div className="view-Header-logo">
      <img src={logo} alt="logo" />
    </div>
    <nav className="view-Header-nav">
      <a href="/" title="/">/</a>
      <Link to="/" title="home">/home</Link>
      <Link to="/fetch" title="fetch">/fetch</Link>
      <Link to="/about" title="about">/about</Link>
      <Link to="/redirect" title="redirect to /">/redirect</Link>
      <Button onClick={logout} button={{ label: 'Log out', title: 'Log out' }} />
    </nav>
  </div>
);

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Header);
