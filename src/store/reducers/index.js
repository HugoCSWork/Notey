import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./auth/authReducer";

/**
 * Combines all reducers together so it can be passed through as one
 */
export default combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  firestore: firestoreReducer
});
