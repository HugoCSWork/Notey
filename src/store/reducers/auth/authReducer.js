import * as actions from "../../actions/actionTypes";
import * as authHelpers from "./authHelper";

const initState = {
  error: null,
  loading: false
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_STARTED:
      return authHelpers.authStart(state);

    case actions.AUTH_SUCCESS:
      return authHelpers.authSuccess(state);

    case actions.AUTH_ERROR:
      return authHelpers.authError(state, payload);

    case actions.AUTH_ENDED:
      return authHelpers.authEnd(state);

    default:
      return state;
  }
};
