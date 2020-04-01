import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Navbar from "../components/Navbar/Navbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
  background-color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Layout for the App
 */
const Layout = ({ children, loggedIn }) => (
  <>
    <Navbar loggedIn={loggedIn} />
    <SideDrawer loggedIn={loggedIn} />
    <MainWrapper>{children}</MainWrapper>
  </>
);

const mapStateToProps = state => {
  return {
    loggedIn: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Layout);
