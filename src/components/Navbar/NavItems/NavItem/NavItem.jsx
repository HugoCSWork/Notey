import React from "react";
import { Li, StyledNavLink } from "./NavItem.styled";

/**
 * Component of a single Nav item
 * @param {*} link - URL Path
 * @param {*} children - Any additional paramaters, eg: name
 * @param {*} mobile - Checks if device is mobile
 * @param {*} clicked - If a item is clicked
 */
const NavItem = ({ link, children, mobile, clicked }) => {
  return (
    <Li>
      <StyledNavLink
        exact
        activeClassName="active"
        onClick={clicked}
        mobile={mobile ? 1 : 0}
        to={link}
      >
        {children}
      </StyledNavLink>
    </Li>
  );
};

export default NavItem;
