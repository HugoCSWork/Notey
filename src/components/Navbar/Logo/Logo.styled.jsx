import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 1rem;
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--color-white);
`;
