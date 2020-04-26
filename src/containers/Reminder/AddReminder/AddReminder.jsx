import React from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { StyledForm } from "../../../hoc/elements";
import Button from "../../../components/UI/Button/Button";
import Heading from "../../../components/UI/Heading/Heading";
import Message from "../../../components/UI/Message/Message";
import Modal from "../../../components/UI/Modal/Modal";
import Input from "../../../components/UI/Input/Input";

import * as actions from "../../../store/actions";

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

/**
 * Move this to elements (REUSED TO MUCH)
 */
const MessageWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  width: 100%;
  padding: 0 3rem;
`;

/**
 * Yup schema for creating a to do item
 */
const ReminderSchema = Yup.object().shape({
  reminder: Yup.string().required("This is required."),
});

const AddReminder = ({ opened, close, addReminderToDB, loading, error }) => {
  return (
    <>
      <Modal opened={opened} close={close}>
        <Heading size="h1" color="white">
          Add a Reminder
        </Heading>
        <Formik
          initialValues={{
            reminder: "",
          }}
          validationSchema={ReminderSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            console.log(loading);
            const response = await addReminderToDB(values);
            setSubmitting(false);
            if (response) {
              close();
              resetForm();
            }
            console.log(error);
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
            <StyledForm>
              <Field
                type="text"
                name="reminder"
                color="white"
                textColor="green"
                placeholder="Write your reminder..."
                component={Input}
              />
              <ButtonsWrapper>
                <Button
                  contain
                  color="mainDark"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  loading={loading || isSubmitting ? "Adding..." : null}
                >
                  Add
                </Button>
              </ButtonsWrapper>
              <MessageWrapper>
                <Message error show={true}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ reminder }) => ({
  loading: reminder.loading,
  error: reminder.error,
});

const mapDispatchToProps = {
  addReminderToDB: actions.addReminderToDB,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReminder);
