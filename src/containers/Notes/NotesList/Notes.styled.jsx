import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  align-self: flex-start;
  min-height: calc(100vh - 6rem);
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 70rem;
  flex-direction: column;
  margin-top: 2rem;
  color: var(--color-white);
  align-items: center;
`;
