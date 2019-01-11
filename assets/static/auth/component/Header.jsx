import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

function Header(props) {
  return (
    <div>
      <Navbar />
      <div className="main main-header">
        <div className={`main-header-title ${props.titleStyle}`}>{props.title}</div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  titleStyle: '',
};

Header.propTypes = {
  titleStyle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
