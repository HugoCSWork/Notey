import React from "react";
import NavItem from "../NavItem/NavItem";
import { Nav, UI } from "../NavItems.styled";

const SignedOutNavLinks = ({ clicked, mobile }) => {
  return (
    <Nav>
      <UI mobile={mobile}>
        <NavItem clicked={clicked} mobile={mobile} link="/register">
          Register
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/login">
          Login
        </NavItem>
      </UI>
    </Nav>
  );
};

export default SignedOutNavLinks;
