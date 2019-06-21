import React from 'react';
import PropTypes from 'prop-types';
import history from '@/common/js/history';

export default function NavbarDropdownItem(props) {
  return (
    <a
      className="dropdown-item"
      href="/#"
      onClick={
        (e) => {
          e.preventDefault();
          history.push(props.to);
        }
      }
    >
      {props.text}
    </a>
  );
}

NavbarDropdownItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
