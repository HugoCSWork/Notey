import React from "react";
import { LogoWrapper, StyledNavLink } from "./Logo.styled";

/**
 * Logo For The Navbar
 * @todo Create a proper logo for the app.
 */
const Logo = ({ loggedIn }) => {
  return (
    <LogoWrapper>
      <StyledNavLink to={loggedIn ? "/" : "/login"}>Notey</StyledNavLink>
    </LogoWrapper>
  );
};

export default Logo;
