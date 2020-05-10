import axios from "axios";
import { EndpointAPI } from "../utils/api";
import * as constants from "../constants/retrieve.constants";

export const getJobStatusListRequest = () => ({
  type: constants.GET_JOB_STATUS_LIST_REQUEST,
});

export const getJobStatusListSuccess = (payload) => ({
  type: constants.GET_JOB_STATUS_LIST_SUCCESS,
  payload,
});

export const getJobStatusListFail = (payload) => ({
  type: constants.GET_JOB_STATUS_LIST_FAIL,
  payload,
});

export const getJobStatus = () => (dispatch) => {
  dispatch(getJobStatusListRequest());
  return axios
    .get(EndpointAPI + "/statuses")
    .then((res) => getJobStatusListSuccess(res))
    .catch((err) => getJobStatusListFail(err));
};

export const getTanentListRequest = () => ({
  type: constants.GET_TANENT_LIST_REQUEST,
});

export const getTanentListSuccess = (payload) => ({
  type: constants.GET_TANENT_LIST_SUCCESS,
  payload,
});

export const getTanentListFail = (payload) => ({
  type: constants.GET_TANENT_LIST_FAIL,
  payload,
});

export const getTanents = () => (dispatch) => {
  dispatch(getTanentListRequest());
  return axios
    .get(EndpointAPI + "/tanents")
    .then((res) => getTanentListSuccess(res))
    .catch((err) => getTanentListFail(err));
};

export const getAllJobsRequest = () => ({
  type: constants.GET_ALL_JOBS_REQUEST,
});

export const getAllJobsSuccess = (payload) => ({
  type: constants.GET_ALL_JOBS_REQUEST,
  payload,
});

export const getAllJobsError = (payload) => ({
  type: constants.GET_ALL_JOBS_REQUEST,
  payload,
});

export const getAllJobs = () => (dispatch) => {
  dispatch(getAllJobsRequest());
  return axios
    .get(EndpointAPI + "/Jobs")
    .then((res) => dispatch(getAllJobsSuccess(res)))
    .catch((err) => dispatch(getAllJobsError(err)));
};

export const getAvailableJobsRequest = () => ({
  type: constants.GET_ALL_AVAILABLE_JOBS_REQUEST,
});

export const getAvailableJobsSuccess = (payload) => ({
  type: constants.GET_ALL_AVAILABLE_JOBS_SUCCESS,
  payload,
});

export const getAvailableJobsError = (payload) => ({
  type: constants.GET_ALL_AVAILABLE_JOBS_FAIL,
  payload,
});

export const getAvailableJobs = () => (dispatch) => {
  dispatch(getAvailableJobsRequest());
  return axios
    .get(EndpointAPI + "/Jobs?filter[where][status]=Job Card Available")
    .then((res) => dispatch(getAvailableJobsSuccess(res)))
    .catch((err) => dispatch(getAvailableJobsError(err)));
};

export const getInprogressJobsRequest = () => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_REQUEST,
});

export const getInprogressJobsSuccess = (payload) => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_SUCCESS,
  payload,
});

export const getInprogressJobsError = (payload) => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_FAIL,
  payload,
});

export const getInprogressJobs = () => (dispatch) => {
  dispatch(getAvailableJobsRequest());
  return axios
    .get(EndpointAPI + "/Jobs?filter[where][status]=Job Card In Progress")
    .then((res) => dispatch(getInprogressJobsSuccess(res)))
    .catch((err) => dispatch(getInprogressJobsError(err)));
};

export const getCompleteJobsRequest = () => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_REQUEST,
});

export const getCompleteJobsSuccess = (payload) => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_SUCCESS,
  payload,
});

export const getCompleteJobsError = (payload) => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_FAIL,
  payload,
});

export const getCompleteJobs = () => (dispatch) => {
  dispatch(getCompleteJobsRequest());
  return axios
    .get(EndpointAPI + "/Jobs?filter[where][status]=Job Card Completed")
    .then((res) => dispatch(getCompleteJobsSuccess(res)))
    .catch((err) => dispatch(getCompleteJobsError(err)));
};

export const getClosedJobsRequest = () => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_REQUEST,
});

export const getClosedJobsSuccess = (payload) => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_SUCCESS,
  payload,
});

export const getClosedJobsError = (payload) => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_FAIL,
  payload,
});

export const getClosedJobs = () => (dispatch) => {
  dispatch(getClosedJobsRequest());
  return axios
    .get(EndpointAPI + "/Jobs?filter[where][status]=Job Card Closed")
    .then((res) => dispatch(getClosedJobsSuccess(res)))
    .catch((err) => dispatch(getClosedJobsError(err)));
};

export const getAcceptedJobsRequest = () => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_REQUEST,
});

export const getAcceptedJobsSuccess = (payload) => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_SUCCESS,
  payload,
});

export const getAcceptedJobsError = (payload) => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_FAIL,
  payload,
});

export const getAcceptedJobs = () => (dispatch) => {
  dispatch(getAcceptedJobsRequest());
  return axios
    .get(EndpointAPI + "/Jobs?filter[where][status]=Job Card Accepted")
    .then((res) => dispatch(getAcceptedJobsSuccess(res)))
    .catch((err) => dispatch(getAcceptedJobsError(err)));
};

export const getDoneJobsRequest = () => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_REQUEST,
});

export const getDoneJobsSuccess = (payload) => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_SUCCESS,
  payload,
});

export const getDoneJobsError = (payload) => ({
  type: constants.GET_ALL_INPROGRESS_JOBS_FAIL,
  payload,
});

export const getDoneJobs = () => (dispatch) => {
  dispatch(getDoneJobsRequest());
  return axios
    .get(EndpointAPI + "/Jobs?filter[where][status]=Job Card Done")
    .then((res) => dispatch(getDoneJobsSuccess(res)))
    .catch((err) => dispatch(getDoneJobsError(err)));
};
