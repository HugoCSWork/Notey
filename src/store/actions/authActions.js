import firebase from "firebase";

import { db } from "../../firebase/firebaseConfig";
import * as actions from "./actionTypes";

/**
 * Sign in
 * @param {*} user
 */
export const register = user => async (dispatch, getState) => {
  dispatch({ type: actions.AUTH_STARTED });
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(resp => {
        firebase.auth().currentUser.sendEmailVerification();
        db.collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: user.firstName,
            lastName: user.lastName
          });
        dispatch({ type: actions.AUTH_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: actions.AUTH_ERROR, payload: err.message });
      });
  } catch (err) {
    dispatch({ type: actions.AUTH_ERROR, payload: err.message });
  }
  dispatch({ type: actions.AUTH_ENDED });
};

export const setData = async (collection, uid, data) => {
  return db
    .collection(collection)
    .doc(uid)
    .set({ data });
};
