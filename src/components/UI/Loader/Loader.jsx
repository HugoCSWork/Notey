import React from "react";
import { StyledLoader } from "./Loader.styled";

const Loader = ({ color }) => {
  return (
    <StyledLoader color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoader>
  );
};

export default Loader;
