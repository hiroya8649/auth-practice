import React from 'react';
import PropTypes from 'prop-types';

function Body(props) {
  return (
    <div className={`main main-body ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
