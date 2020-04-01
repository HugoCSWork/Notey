import React from "react";
import NavItem from "./NavItem/NavItem";
import { Nav, UI } from "./NavItems.styled";

const SignedInNavLinks = ({ clicked, mobile }) => {
  return (
    <Nav>
      <UI mobile={mobile}>
        <NavItem clicked={clicked} mobile={mobile} link="/register">
          Todo
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/login">
          Notes
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/logout">
          Logout
        </NavItem>
      </UI>
    </Nav>
  );
};

export default SignedInNavLinks;
