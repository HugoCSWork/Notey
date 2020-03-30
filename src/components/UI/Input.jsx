import React from "react";
import styled from "styled-components";

/**
 * Wrapper for input box
 */
const InputWrapper = styled.div`
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
const Error = styled.div`
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
const StyledInput = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  background-color: var(--color-mainLight);
  color: var(--color-white);
  font-weight: 500;
  font-size: 1.3rem;
  border: none;
  border-radius: 2rem;

  &::placeholder {
    color: var(--color-white);
  }
`;

/**
 *  Styled component for input
 * @param {field} - Passes through the properties needed to be able to work with formik.
 * @param {form: {touched, errors}} - Passes through the properties needed to be able to show the errors
 */
const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
