import React, { useState } from "react";

import Logo from "../Navbar/Logo/Logo";
import Hamburger from "./Hamburger/Hamburger";
import SignedOutNavLinks from "../Navbar/NavItems/SignedOutNavLinks";
import SignedInNavLinks from "../Navbar/NavItems/SignedInNavLinks";
import { FixedWrapper, Wrapper, Menu } from "./SideDrawer.styled";
/**
 * Side drawer to move between pages in mobile layout
 */
const SideDrawer = ({ loggedIn }) => {
  const [isOpened, setisOpened] = useState(false);
  return (
    <>
      <FixedWrapper>
        <Wrapper>
          <Logo />
          <Hamburger opened={isOpened} clicked={() => setisOpened(!isOpened)} />
        </Wrapper>
      </FixedWrapper>
      <Menu opened={isOpened}>
        {loggedIn.uid ? (
          <SignedInNavLinks
            loggedIn={loggedIn}
            mobile
            clicked={() => setisOpened(false)}
          />
        ) : (
          <SignedOutNavLinks
            loggedIn={loggedIn}
            mobile
            clicked={() => setisOpened(false)}
          />
        )}
      </Menu>
    </>
  );
};

export default SideDrawer;
