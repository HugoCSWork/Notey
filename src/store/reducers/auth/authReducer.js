import * as actions from "../../actions/actionTypes";
import * as authHelpers from "./authHelper";
import { cleanUp } from "./authCleanUp";

const initState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false
  }
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case actions.CLEAN:
      return cleanUp(state);

    case actions.AUTH_STARTED:
      return authHelpers.authStart(state);

    case actions.AUTH_SUCCESS:
      return authHelpers.authSuccess(state);

    case actions.AUTH_ERROR:
      return authHelpers.authError(state, payload);

    case actions.VERIFY_EMAIL_STARTED:
      return authHelpers.verifyEmailStart(state);

    case actions.VERIFY_EMAIL_SUCCESS:
      return authHelpers.verifyEmailSuccess(state);

    case actions.VERIFY_EMAIL_FAILED:
      return authHelpers.verifyEmailFailed(state, payload);

    default:
      return state;
  }
};
