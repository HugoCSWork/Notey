import React from "react";
import { Container } from "../../hoc/elements";
import Logo from "./Logo/Logo";
import SignedOutNavLinks from "./NavItems/NavLinks/SignedOutNavLinks";
import SignedInNavLinks from "./NavItems/NavLinks/SignedInNavLinks";
import { FixedWrapper, Wrapper } from "./Navbar.styled";

/**
 * Navbar
 */
const Navbar = ({ loggedIn }) => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo loggedIn={loggedIn.uid} />
          {loggedIn.uid ? <SignedInNavLinks /> : <SignedOutNavLinks />}
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Navbar;
