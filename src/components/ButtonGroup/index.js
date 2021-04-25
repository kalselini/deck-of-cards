import React from 'react';
import MUIButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';

/**
 * Primary UI component for Button Group
 */
const ButtonGroup = ({ children }) => {
  return (
    <MUIButtonGroup variant="contained" aria-label="contained button group">
      {children}
    </MUIButtonGroup>
  );
};

export default ButtonGroup;

ButtonGroup.propTypes = {
  children: PropTypes.node,
};

ButtonGroup.defaultProps = {
  children: '',
};
