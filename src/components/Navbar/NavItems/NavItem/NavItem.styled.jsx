import styled from "styled-components";
import { NavLink } from "react-router-dom";

/**
 * Styling for individual Items in the Navbar
 * In Mobile it makes  all the components / effects smaller
 */
export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  border-bottom: ${({ mobile }) =>
    mobile ? " 1px solid transparent" : "2px solid transparent"};
  font-size: 1.2rem;
  padding: 1rem;
  margin: ${({ mobile }) => (mobile ? " 1rem 0 " : "0 1rem")};
  font-weight: 400px;
  color: var(--color-white);
  transition: all 0.2s;

  &:hover {
    border-bottom: ${({ mobile }) =>
      mobile ? "1px solid var(--color-white)" : "2px solid var(--color-white)"};
  }

  &.active {
    border-bottom: ${({ mobile }) =>
      mobile ? "1px solid var(--color-white)" : "2px solid var(--color-white)"};
  }
`;

export const Li = styled.li`
  display: flex;
  height: 100%;
`;
