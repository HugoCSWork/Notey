import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { Wrapper, InnerWrapper, Content } from "./Reminder.styled";
import { Container } from "../../hoc/elements";
import Heading from "../../components/UI/Heading/Heading";
import Button from "../../components/UI/Button/Button";
import AddReminder from "./AddReminder/AddReminder";

const Reminder = () => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading size="h1" bold>
            Reminder
          </Heading>
          <Button color="mainDark" contain onClick={() => setIsAdding(true)}>
            Add reminder
          </Button>
          <AddReminder opened={isAdding} close={() => setIsAdding(false)} />
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  reminder: firestore.data.reminder,
  requesting: firestore.status.requesting,
  requested: firestore.status.requested,
});

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(({ userId }) => [{ collection: "reminder", doc: userId }])
)(Reminder);
