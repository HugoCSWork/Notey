import styled from "styled-components";

export const StyledHamb = styled.div`
  width: 30px;
  height: 22.5px;
  padding: 1rem;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 4.5px;
    width: 100%;
    background: var(--color-white);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: ${({ opened }) => (opened ? "9px" : "0px")};
      width: ${({ opened }) => (opened ? "0%" : "100%")};
      left: ${({ opened }) => (opened ? "50%" : null)};
    }

    &:nth-child(2) {
      transform: ${({ opened }) => (opened ? "rotate(45deg)" : null)};
    }

    &:nth-child(3) {
      transform: ${({ opened }) => (opened ? "rotate(-45deg)" : null)};
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 9px;
    }

    &:nth-child(4) {
      top: ${({ opened }) => (opened ? "9px" : "18px")};
      width: ${({ opened }) => (opened ? "0%" : "100%")};
      left: ${({ opened }) => (opened ? "50%" : null)};
    }
  }
`;
