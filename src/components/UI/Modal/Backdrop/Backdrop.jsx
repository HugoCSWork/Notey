import React from "react";

import { Wrapper } from "./Backdrop.styled";
const Backdrop = ({ opened, close }) => {
  return <Wrapper onClick={close} opened={opened} />;
};

export default Backdrop;
