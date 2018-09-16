import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classes, onClick, text }) => (
  <button
    type="button"
    className={classes}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
