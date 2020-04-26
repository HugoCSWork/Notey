import * as actions from "./actionTypes";
import { db } from "../../firebase/firebaseConfig";

export const addReminderToDB = (data) => async (dispatch, getState) => {
  const userRef = db.collection("reminders").doc(getState().firebase.auth.uid);
  dispatch({ type: actions.ADD_REMINDER_STARTED });

  try {
    const result = await userRef.get();
    if (!result.data()) {
      userRef.set.dsdsd({
        reminders: [
          {
            id: new Date().valueOf(),
            reminder: data.reminder,
          },
        ],
      });
    } else {
      userRef.update.dsdsds({
        reminders: [
          {
            id: new Date().valueOf(),
            reminder: data.reminder,
          },
          ...result.data().reminders,
        ],
      });
    }
    dispatch({ type: actions.ADD_REMINDER_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_REMINDER_FAILED, payload: err.message });
    // return false;
  }
};
