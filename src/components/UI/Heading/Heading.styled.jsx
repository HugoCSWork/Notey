import styled, { css } from "styled-components";

/**
 * Base css to be used for all headings
 */
const baseStyle = css`
  color: ${({ color }) =>
    color === "white" ? "var(--color-white)" : "var(--color-mainDark)"};
  font-weight: ${({ bold }) => (bold ? "700" : "300")};
  margin-top: 0;
  letter-spacing: 1px;
  margin-bottom: ${({ noMargin }) => (noMargin ? "0.1rem" : "3rem")};
`;

export const H1 = styled.h1`
  font-size: 2rem;
  ${baseStyle}
`;

export const H2 = styled.h2`
  font-size: 1.8rem;
  ${baseStyle}
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  ${baseStyle}
`;

export const H4 = styled.h4`
  font-size: 1.3rem;
  ${baseStyle}
`;
