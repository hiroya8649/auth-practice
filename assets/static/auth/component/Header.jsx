import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" />
        </div>
      </nav>
      <div className="main main-header">
        <div className={`main-header-title ${props.titleStyle}`}>{props.title}</div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  titleStyle: ""
}

Header.propTypes = {
  titleStyle: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Header;
