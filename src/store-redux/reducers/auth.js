const initial = { isAuthenticated: false };

export const auth = (state = initial, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { isAuthenticated: true };
    case 'LOG_OUT':
      return { isAuthenticated: false };
    default:
      return state;
  }
};
