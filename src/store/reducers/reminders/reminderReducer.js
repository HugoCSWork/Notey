import * as actions from "../../actions/actionTypes";

const initialState = {
  error: null,
  loading: false,
  success: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_REMINDER_STARTED:
      return { ...state, loading: true };
    case actions.ADD_REMINDER_SUCCESS:
      return { ...state, loading: false };
    case actions.ADD_REMINDER_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
