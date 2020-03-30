import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import firebase from "firebase/app";
import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore

import rootReducer from "./reducers";
import firebaseConfig from "../firebase/firebaseConfig";

/**
 * Allows the use of devtools extension on chrome
 * Disables if it's live
 */
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

/**
 * Creates a store using the rootReducer
 * thunk middleware allows for async calls to the action.
 */
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, firebaseConfig)
  )
);

const reduxFirebaseConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
};

export const rrfProps = {
  userProfile: null,
  firebase,
  config: reduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
export default store;
