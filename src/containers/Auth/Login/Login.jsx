import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import {
  FormWrapper,
  StyledForm,
  MessageWrapper,
  RedirectLinkWrapper
} from "../../../hoc/elements";
import Heading from "../../../components/UI/Heading";
import Input from "../../../components/UI/Input";
import Message from "../../../components/UI/Message";
import Button from "../../../components/UI/Button";

import * as actions from "../../../store/actions";

/**
 * Yup schema for logging in
 */
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "Minimum Length is 8 ")
});

/**
 * Formik form uses @constant LoginSchema to verify that the validation is correct
 * @todo - onSubmit will lead to passing to auth action
 */
const Login = ({ login, loading, error, cleanUp, history }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          login(values);
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Login
          </Heading>
          <Heading bold size="h4" color="white">
            Enter your Email and Password to Login
          </Heading>
          <StyledForm>
            <Field
              type="email"
              name="email"
              placeholder="Email.."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Password.."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "Logging in...." : null}
              type="submit"
            >
              Login
            </Button>
            <RedirectLinkWrapper onClick={() => history.push("/recover")}>
              Forgot Password? Click to reset
            </RedirectLinkWrapper>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error
});

const mapDispatchToProps = {
  login: actions.login,
  cleanUp: actions.clean
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
