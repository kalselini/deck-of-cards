import React from 'react';
import MUIButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';

/**
 * Primary UI component for Button
 */
const Button = ({ children, disabled, startIcon, onClick }) => {
  return (
    <MUIButton
      variant="contained"
      disabled={disabled}
      startIcon={startIcon}
      onClick={onClick}
    >
      {children}
    </MUIButton>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  disabled: false,
  startIcon: null,
  onClick: () => {},
};
