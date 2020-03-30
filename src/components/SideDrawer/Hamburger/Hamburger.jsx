import React from "react";
import { StyledHamb } from "./Hamburger.styled";

/**
 * This is the icon to open/close the navbar
 * @param {*} opened - Checks if the navbar is open
 * @param {*} clicked - Checks if the icon has been clicked
 */
const Hamburger = ({ opened, clicked }) => {
  return (
    <StyledHamb onClick={clicked} opened={opened}>
      <span />
      <span />
      <span />
      <span />
    </StyledHamb>
  );
};

export default Hamburger;
