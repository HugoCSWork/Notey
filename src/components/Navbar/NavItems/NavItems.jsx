import React from "react";
import NavItem from "./NavItem/NavItem";
import { Nav, UI } from "./NavItems.styled";

const NavItems = ({ clicked, mobile }) => {
  return (
    <Nav>
      <UI mobile={mobile}>
        <NavItem clicked={clicked} mobile={mobile} link="/register">
          Register
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/login">
          Login
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/logout">
          Logout
        </NavItem>
      </UI>
    </Nav>
  );
};

export default NavItems;
