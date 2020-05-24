import * as retrieveConstants from "../constants/retrieve.constants";
import * as createConstants from "../constants/create.constants";

const initialStata = {
  createJob: {
    job: null,
    isLoading: false,
    success: false,
    error: null,
  },
  allJobs: {
    jobs: null,
    isLoading: false,
    success: false,
    error: null,
  },
  availableJobs: {
    jobs: null,
    isLoading: false,
    success: false,
    error: null,
  },
  acceptedJobs: {
    jobs: null,
    isLoading: false,
    success: false,
    error: null,
  },
  inprogressJobs: {
    jobs: null,
    isLoading: false,
    success: false,
    error: null,
  },
  completedJobs: {
    jobs: null,
    isLoading: false,
    success: false,
    error: null,
  },
  doneJobs: {
    jobs: null,
    isLoading: false,
    success: false,
    error: null,
  },
  closedJobs: {
    jobs: null,
    isLoading: false,
    success: false,
    error: null,
  },
};

const jobsReducer = (state = initialStata, actions) => {
  switch (actions.type) {
    // Create job start
    case createConstants.CREATE_JOB_REQUEST:
      return {
        ...state,
        createJob: {
          ...state.createJob,
          isLoading: true,
        },
      };
    case createConstants.CREATE_JOB_SUCCESS:
      return {
        ...state,
        createJob: {
          ...state.createJob,
          isLoading: false,
          success: true,
          job: actions.payload,
        },
      };
    case createConstants.CREATE_JOB_FAIL:
      return {
        ...state,
        createJob: {
          ...state.createJob,
          isLoading: false,
          error: actions.payload,
        },
      };
    // Create job state ends
    // All jobs start
    case retrieveConstants.GET_ALL_JOBS_REQUEST:
      return {
        ...state,
        allJobs: { ...state.allJobs, isLoading: true },
      };
    case retrieveConstants.GET_ALL_JOBS_SUCCESS:
      return {
        ...state,
        allJobs: {
          ...state.allJobs,
          isLoading: false,
          success: true,
          jobs: actions.payload,
        },
      };
    case retrieveConstants.GET_ALL_JOBS_FAIL:
      return {
        ...state,
        allJobs: { ...state.allJobs, isLoading: false, error: actions.payload },
      };
    // All jobs ends
    // Available jobs start
    case retrieveConstants.GET_ALL_AVAILABLE_JOBS_REQUEST:
      return {
        ...state,
        availableJobs: { ...state.availableJobs, isLoading: true },
      };
    case retrieveConstants.GET_ALL_AVAILABLE_JOBS_SUCCESS:
      return {
        ...state,
        availableJobs: {
          ...state.availableJobs,
          isLoading: false,
          success: true,
          jobs: actions.payload,
        },
      };
    case retrieveConstants.GET_ALL_AVAILABLE_JOBS_FAIL:
      return {
        ...state,
        availableJobs: {
          ...state.availableJobs,
          isLoading: false,
          error: actions.payload,
        },
      };
    // Available jobs ends
    // Accepted jobs start
    case retrieveConstants.GET_ALL_ACCEPTED_JOBS_REQUEST:
      return {
        ...state,
        acceptedJobs: { ...state.acceptedJobs, isLoading: true },
      };
    case retrieveConstants.GET_ALL_ACCEPTED_JOBS_SUCCESS:
      return {
        ...state,
        acceptedJobs: {
          ...state.acceptedJobs,
          isLoading: false,
          success: true,
          jobs: actions.payload,
        },
      };
    case retrieveConstants.GET_ALL_ACCEPTED_JOBS_FAIL:
      return {
        ...state,
        acceptedJobs: {
          ...state.acceptedJobs,
          isLoading: false,
          error: actions.payload,
        },
      };
    // Accepted jobs ends
    // Inprogress jobs start
    case retrieveConstants.GET_ALL_INPROGRESS_JOBS_REQUEST:
      return {
        ...state,
        inprogressJobs: { ...state.inprogressJobs, isLoading: true },
      };
    case retrieveConstants.GET_ALL_INPROGRESS_JOBS_SUCCESS:
      return {
        ...state,
        inprogressJobs: {
          ...state.inprogressJobs,
          isLoading: false,
          success: true,
          jobs: actions.payload,
        },
      };
    case retrieveConstants.GET_ALL_INPROGRESS_JOBS_FAIL:
      return {
        ...state,
        inprogressJobs: {
          ...state.inprogressJobs,
          isLoading: false,
          error: actions.payload,
        },
      };
    // Inprogress jobs ends
    // complete jobs start
    case retrieveConstants.GET_ALL_COMPLETE_JOBS_REQUEST:
      return {
        ...state,
        completedJobs: { ...state.completedJobs, isLoading: true },
      };
    case retrieveConstants.GET_ALL_COMPLETE_JOBS_SUCCESS:
      return {
        ...state,
        completedJobs: {
          ...state.completedJobs,
          isLoading: false,
          success: true,
          jobs: actions.payload,
        },
      };
    case retrieveConstants.GET_ALL_COMPLETE_JOBS_FAIL:
      return {
        ...state,
        completedJobs: {
          ...state.completedJobs,
          isLoading: false,
          error: actions.payload,
        },
      };
    // complete jobs ends
    // done jobs start
    case retrieveConstants.GET_ALL_DONE_JOBS_REQUEST:
      return {
        ...state,
        doneJobs: { ...state.doneJobs, isLoading: true },
      };
    case retrieveConstants.GET_ALL_DONE_JOBS_SUCCESS:
      return {
        ...state,
        doneJobs: {
          ...state.doneJobs,
          isLoading: false,
          success: true,
          jobs: actions.payload,
        },
      };
    case retrieveConstants.GET_ALL_DONE_JOBS_FAIL:
      return {
        ...state,
        doneJobs: {
          ...state.doneJobs,
          isLoading: false,
          error: actions.payload,
        },
      };
    // done jobs ends
    // closed jobs start
    case retrieveConstants.GET_ALL_CLOSED_JOBS_REQUEST:
      return {
        ...state,
        closedJobs: { ...state.closedJobs, isLoading: true },
      };
    case retrieveConstants.GET_ALL_CLOSED_JOBS_SUCCESS:
      return {
        ...state,
        closedJobs: {
          ...state.closedJobs,
          isLoading: false,
          success: true,
          jobs: actions.payload,
        },
      };
    case retrieveConstants.GET_ALL_CLOSED_JOBS_FAIL:
      return {
        ...state,
        closedJobs: {
          ...state.closedJobs,
          isLoading: false,
          error: actions.payload,
        },
      };
    // closed jobs ends
    default:
      return state;
  }
};

export default jobsReducer;
