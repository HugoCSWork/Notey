import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-weight: 700;
  color: ${({ error, success }) => {
    if (error) return "var(--color-errorRed)";
    if (success) return "green";
    else return "var(--color-main)";
  }};
  text-align: center;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: translateY(${({ show }) => (show ? "45px" : "0px")});
  transition: all 0.2s;
  margin-bottom: -15px;
`;

const Message = ({ children, error, success, show }) => {
  return (
    <P error={error} success={success} show={show}>
      {children}
    </P>
  );
};

export default Message;
