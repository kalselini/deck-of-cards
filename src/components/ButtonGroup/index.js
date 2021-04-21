import React from "react";
import MUIButtonGroup from "@material-ui/core/ButtonGroup";

/**
 * Primary UI component for user interaction
 */
const ButtonGroup = ({ children, color }) => {
  return (
    <MUIButtonGroup
      color={color}
      variant="contained"
      aria-label="contained button group"
    >
      {children}
    </MUIButtonGroup>
  );
};

export default ButtonGroup;
