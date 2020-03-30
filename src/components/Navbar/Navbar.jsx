import React from "react";
import { Container } from "../../hoc/elements";
import Logo from "./Logo/Logo";
import NavItems from "./NavItems/NavItems";
import { FixedWrapper, Wrapper } from "./Navbar.styled";

/**
 * Navbar
 */
const Navbar = () => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavItems />
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Navbar;
