import * as constants from "../constants/user.constants";
const initialState = {
  currentUser: null,
  profile: null,
  signup: null,
  reset: null,
  isLoginLoading: false,
  isSignUpLoading: false,
  isProfileLoading: false,
  isResetLoading: false,
  errorProfile: null,
  errorLogin: null,
  errorSignup: null,
  errorReset: null,
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    // create user account
    case constants.AUTH_USER_SIGNUP_REQUEST:
      return { ...state, isSignUpLoading: true };
    case constants.AUTH_USER_SIGNUP_SUCCESS:
      return { ...state, signup: actions.payload, isSignUpLoading: false };
    case constants.AUTH_USER_SIGNUP_FAIL:
      return {
        ...state,
        errorSignup: actions.payload,
        isSignUpLoading: false,
      };
    // user profile
    case constants.AUTH_USER_PROFILE_REQUEST:
      return { ...state, isProfileLoading: true };
    case constants.AUTH_USER_PROFILE_SUCCESS:
      return { ...state, profile: actions.payload, isProfileLoading: false };
    case constants.AUTH_USER_PROFILE_FAIL:
      return {
        ...state,
        errorProfile: actions.payload,
        isProfileLoading: false,
      };
    //login user
    case constants.AUTH_USER_LOGIN_REQUEST:
      return { ...state, isLoginLoading: true };
    case constants.AUTH_USER_LOGIN_SUCCESS:
      return { ...state, currentUser: actions.payload, isLoginLoading: false };
    case constants.AUTH_USER_LOGIN_FAIL:
      return {
        ...state,
        errorLogin: actions.payload,
        isLoginLoading: false,
      };
    // user reset
    case constants.AUTH_USER_RESET_REQUEST:
      return { ...state, isResetLoading: true };
    case constants.AUTH_USER_RESET_SUCCESS:
      return { ...state, reset: actions.payload, isResetLoading: false };
    case constants.AUTH_USER_RESET_FAIL:
      return {
        ...state,
        errorReset: actions.payload,
        isResetLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
