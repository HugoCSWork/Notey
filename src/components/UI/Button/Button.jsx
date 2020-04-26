import React from "react";
import { StyledButton } from "./Button.styled";

/**
 *  Styled component for button
 * @param {boolean} disabled - Disables the button if has been clicked with invalid information till data is valid.
 */
const Button = ({ children, disabled, loading, contain, color, ...rest }) => {
  return (
    <StyledButton
      contain={contain}
      color={color}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? loading : children}
    </StyledButton>
  );
};

export default Button;
