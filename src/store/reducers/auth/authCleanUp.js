export const cleanUp = state => {
  return {
    error: null,
    loading: false,
    verifyEmail: {
      error: null,
      loading: false
    }
  };
};
