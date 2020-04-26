import styled from "styled-components";

/**
 * Wrapper for input box
 */
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3.5rem;
  position: relative;

  &:last-of-type {
    margin-bottom: 4.5rem;
  }
`;

/**
 * Styling for error message
 */
export const Error = styled.div`
  color: var(--color-errorRed);
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "20px" : "10px")});
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0 2rem;
`;

/**
 * Styling for input
 */
export const StyledInput = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  background-color: ${({ color }) => {
    if (color === "white") {
      return "var(--color-white)";
    } else {
      return "var(--color-mainLight);";
    }
  }};
  color: ${({ textColor }) => {
    if (textColor === "green") {
      return "var(--color-mainLight)";
    } else {
      return "var(--color-white)";
    }
  }};
  font-weight: 500;
  font-size: 1.3rem;
  border: none;
  border-radius: 2rem;

  &::placeholder {
    color: ${({ textColor }) => {
      if (textColor === "green") {
        return "var(--color-mainLight)";
      } else {
        return "var(--color-white)";
      }
    }};
  }
`;
