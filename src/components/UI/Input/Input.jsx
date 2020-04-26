import React from "react";
import { StyledInput, InputWrapper, Error } from "./Input.styled";

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
