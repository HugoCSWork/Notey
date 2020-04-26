import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
  FormWrapper,
  StyledForm,
  MessageWrapper,
  RedirectLinkWrapper
} from "../../../hoc/elements";
import * as actions from "../../../store/actions/index";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import Heading from "../../../components/UI/Heading/Heading";
import Message from "../../../components/UI/Message/Message";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is Required")
    .min(3, "Too Short")
    .max(25, "Too Long"),
  lastName: Yup.string()
    .required("Last Name is Required")
    .min(3, "Too Short")
    .max(25, "Too Long"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Email is Required"),
  confirmEmail: Yup.string()
    .required("You need to confirm your password")
    .oneOf([Yup.ref("email"), null], "Emails must match"),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "Password is too Short"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("You need to confirm your Password")
});

const Register = ({ register, loading, error, history, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={RegisterSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const val = await register(values);
        console.log(val);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Sign Up
          </Heading>
          <Heading bold size="h4" color="white">
            Fill in your details to register your account
          </Heading>
          <StyledForm>
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              component={Input}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              component={Input}
            />
            <Field
              type="email"
              name="email"
              placeholder="Email Address"
              component={Input}
            />
            <Field
              type="email"
              name="confirmEmail"
              placeholder="Confirm Email Address"
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              component={Input}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "Signing Up...." : null}
              type="submit"
            >
              Sign up
            </Button>
            <RedirectLinkWrapper onClick={() => history.push("/login")}>
              Already have an account? Log in
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
  register: actions.register,
  cleanUp: actions.clean
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
