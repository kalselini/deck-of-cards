import React from "react";
import MUIButton from "@material-ui/core/Button";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, startIcon, endIcon, color, className }) => {
  return (
    <MUIButton
      color={color}
      variant="contained"
      disableElevation
      className={className}
      borderRadius={0}
      endIcon={endIcon}
      startIcon={startIcon}
    >
      {label}
    </MUIButton>
  );
};

export default Button;
