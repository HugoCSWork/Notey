export const authStart = state => {
  return { ...state, loading: true };
};

export const authEnd = state => {
  return { ...state, loading: false };
};

export const authError = (state, payload) => {
  return { ...state, loading: false, error: payload };
};

export const authSuccess = state => {
  return { ...state, loading: false };
};

export const verifyEmailStart = state => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: true }
  };
};

export const verifyEmailSuccess = state => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: false, error: false }
  };
};

export const verifyEmailFailed = (state, payload) => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: false, error: payload }
  };
};
