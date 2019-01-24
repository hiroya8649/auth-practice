import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

function Header(props) {
  return (
    <div>
      <Navbar />
      <div className="main main-header">
        <div className={`main-header-title ${props.className}`}>{props.title}</div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
