import * as constants from "../constants/retrieve.constants";
const initialState = {
  tanents: {
    list: null,
    error: null,
    isLoading: false,
  },
  statuses: {
    list: null,
    error: null,
    isLoading: false,
  },
};

const sharedReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case constants.GET_JOB_STATUS_LIST_REQUEST:
      return {
        ...state,
        statuses: {
          isLoading: true,
        },
      };
    case constants.GET_JOB_STATUS_LIST_SUCCESS:
      return {
        ...state,
        statuses: {
          list: actions.payload,
          isLoading: false,
        },
      };
    case constants.GET_JOB_STATUS_LIST_FAIL:
      return {
        ...state,
        statuses: {
          error: actions.payload,
          isLoading: false,
        },
      };
    case constants.GET_TANENT_LIST_REQUEST:
      return {
        ...state,
        tanents: {
          isLoading: true,
        },
      };
    case constants.GET_TANENT_LIST_SUCCESS:
      return {
        ...state,
        tanents: {
          list: actions.payload,
          isLoading: false,
        },
      };
    case constants.GET_TANENT_LIST_FAIL:
      return {
        ...state,
        tanents: {
          error: actions.payload,
          isLoading: false,
        },
      };
    default:
      return state;
  }
};

export default sharedReducer;
