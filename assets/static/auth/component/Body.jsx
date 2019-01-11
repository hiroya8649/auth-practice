import React from 'react';
import PropTypes from 'prop-types';

function Body(props) {
  return (
    <div className={`main main-body ${props.className}`}>
      {props.children}
    </div>
  );
}

Body.defaultProps = {
  className: '',
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Body;
