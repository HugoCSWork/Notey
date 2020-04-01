import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import firebase from "firebase/app";

import { FormWrapper, MessageWrapper } from "../../../hoc/elements";
import Heading from "../../../components/UI/Heading";
import Button from "../../../components/UI/Button";
import Message from "../../../components/UI/Message";
import * as actions from "../../../store/actions";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VerifyEmail = ({ sendVerification, loading, error, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  const checkForVerifiedInterval = setInterval(() => {
    try {
      firebase.auth().currentUser.reload();
      if (firebase.auth().currentUser.emailVerified) {
        clearInterval(checkForVerifiedInterval);
        window.location.reload(true);
      }
    } catch {}
  }, 1000);

  return (
    <FormWrapper>
      <Wrapper>
        <Heading color="white" noMargin size="h1">
          Verify Email
        </Heading>
        <Heading color="white" size="h4" bold>
          An Email has been sent please verify your email (Refresh Page When
          complete)
        </Heading>
        <Button
          loading={loading ? "Sending Verification Email" : null}
          disabled={loading}
          onClick={() => sendVerification()}
        >
          Re-send Verification Email
        </Button>
        <MessageWrapper>
          <Message error show={error}>
            {error}
          </Message>
        </MessageWrapper>
        <MessageWrapper>
          <Message success show={error === false}>
            Message sent successfully
          </Message>
        </MessageWrapper>
      </Wrapper>
    </FormWrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error,
  cleanUp: actions.clean
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
