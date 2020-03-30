import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Footer from "../components/Footer/Footer";
// import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";
// import Navbar from "../components/Navigation/Navbar/Navbar";

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
const Layout = ({ children }) => (
  <>
    <Navbar />
    <SideDrawer />
    <MainWrapper>{children}</MainWrapper>
  </>
);

export default Layout;
