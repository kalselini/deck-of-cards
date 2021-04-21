import React from "react";
import MUIButton from "@material-ui/core/Button";

/**
 * Primary UI component for user interaction
 */
const Button = ({ label, disabled, startIcon, onClick }) => {
  return (
    <MUIButton
      variant="contained"
      disabled={disabled}
      startIcon={startIcon}
      onClick={onClick}
    >
      {label}
    </MUIButton>
  );
};

export default Button;
