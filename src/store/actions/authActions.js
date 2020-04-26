import firebase from "firebase";

import { db } from "../../firebase/firebaseConfig";
import * as actions from "./actionTypes";

/**
 * Sign in
 * @param {*} user
 * @todo: What happens if the user registers sucessfully but everything after blows up HUH YOU GUNNA JUST MAKE IT ANYWAY
 */
export const register = (user) => async (dispatch, getState) => {
  dispatch({ type: actions.AUTH_STARTED });
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((resp) => {
        db.collection("users").doc(resp.user.uid).set({
          firstName: user.firstName,
          lastName: user.lastName,
        });
        firebase.auth().currentUser.sendEmailVerification();
        dispatch({ type: actions.AUTH_SUCCESS });
      });
    return null;
  } catch (err) {
    dispatch({ type: actions.AUTH_ERROR, payload: err.message });
    return err.message;
  }
};

export const login = (user) => async (dispatch, getState) => {
  dispatch({ type: actions.AUTH_STARTED });
  try {
    await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_ERROR, payload: err.message });
  }
};

export const verifyEmail = (user) => async (dispatch, getState) => {
  dispatch({ type: actions.VERIFY_EMAIL_STARTED });
  try {
    await firebase.auth().currentUser.sendEmailVerification();
    dispatch({ type: actions.VERIFY_EMAIL_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.VERIFY_EMAIL_FAILED, payload: err.message });
  }
};

export const logout = (user) => async (dispatch, getState) => {
  await firebase.auth().signOut();
  dispatch({ type: actions.LOGOUT });
};

/**
 * Clean up messages
 */
export const clean = () => ({
  type: actions.CLEAN,
});
