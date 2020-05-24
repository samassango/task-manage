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
    .get(EndpointAPI.baseUrl + "/statuses")
    .then((res) => dispatch(getJobStatusListSuccess(res.data)))
    .catch((err) => dispatch(getJobStatusListFail(err)));
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
    .get(EndpointAPI.baseUrl + "/tanents")
    .then((res) => dispatch(getTanentListSuccess(res.data)))
    .catch((err) => dispatch(getTanentListFail(err)));
};

export const getAllJobsRequest = () => ({
  type: constants.GET_ALL_JOBS_REQUEST,
});

export const getAllJobsSuccess = (payload) => ({
  type: constants.GET_ALL_JOBS_SUCCESS,
  payload,
});

export const getAllJobsError = (payload) => ({
  type: constants.GET_ALL_JOBS_FAIL,
  payload,
});

export const getAllJobs = () => (dispatch) => {
  dispatch(getAllJobsRequest());
  return axios
    .get(
      EndpointAPI.baseUrl + "/Jobs?filter[include]=status&filter[include]=User"
    )
    .then((res) => {
      console.log({ res });
      return dispatch(getAllJobsSuccess(res.data));
    })
    .catch((err) => dispatch(getAllJobsError(err)));
};

export const getAllJobsByUserRequest = () => ({
  type: constants.GET_ALL_JOBS_BY_USER_REQUEST,
});

export const getAllJobsByUserSuccess = (payload) => ({
  type: constants.GET_ALL_JOBS_BY_USER_SUCCESS,
  payload,
});

export const getAllJobsByUserError = (payload) => ({
  type: constants.GET_ALL_JOBS_BY_USER_FAIL,
  payload,
});

export const getAllJobsByUserId = (param = { userId: null }) => (dispatch) => {
  dispatch(getAllJobsByUserRequest());
  return axios
    .get(
      EndpointAPI.baseUrl +
        "/Jobs?filter[include]=status&filter[include]=User&filter[where][author]=" +
        param.userId
    )
    .then((res) => {
      console.log({ res });
      return dispatch(getAllJobsByUserSuccess(res.data));
    })
    .catch((err) => dispatch(getAllJobsByUserError(err)));
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
    .get(
      EndpointAPI.baseUrl +
        "/Jobs?filter[include]=status&filter[include]=User&filter[where][status]=5eb72dcd04c7b90017494208"
    )
    .then((res) => dispatch(getAvailableJobsSuccess(res.data)))
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
    .get(
      EndpointAPI.baseUrl +
        "/Jobs?filter[include]=status&filter[include]=User&filter[where][status]=5eb72e5004c7b9001749420a"
    )
    .then((res) => dispatch(getInprogressJobsSuccess(res.data)))
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
    .get(
      EndpointAPI.baseUrl +
        "/Jobs?filter[include]=status&filter[include]=User&filter[where][status]=5eb72e6c04c7b9001749420b"
    )
    .then((res) => dispatch(getCompleteJobsSuccess(res.data)))
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
    .get(
      EndpointAPI.baseUrl +
        "/Jobs?filter[include]=status&filter[include]=User&filter[where][status]=5eb72f0604c7b9001749420d"
    )
    .then((res) => dispatch(getClosedJobsSuccess(res.data)))
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
    .get(
      EndpointAPI.baseUrl +
        "/Jobs?filter[include]=status&filter[include]=User&filter[where][status]=5eb72e1c04c7b90017494209"
    )
    .then((res) => dispatch(getAcceptedJobsSuccess(res.data)))
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
    .get(
      EndpointAPI.baseUrl +
        "/Jobs?filter[include]=status&filter[include]=User&filter[where][status]=5eb72e8404c7b9001749420c"
    )
    .then((res) => dispatch(getDoneJobsSuccess(res.data)))
    .catch((err) => dispatch(getDoneJobsError(err)));
};

export const getJobByIdRequest = () => ({
  type: constants.GET_JOB_BY_JOB_ID_REQUEST,
});
export const getJobByIdSuccess = (payload) => ({
  type: constants.GET_JOB_BY_JOB_ID_SUCCESS,
  payload,
});
export const getJobByIdFail = (payload) => ({
  type: constants.GET_JOB_BY_JOB_ID_FAIL,
  payload,
});
export const getAllJobsByUser = (param = { jobId: null }) => (dispatch) => {
  dispatch(getJobByIdRequest());
  return axios
    .get(
      EndpointAPI.baseUrl +
        `/Jobs/${param.jobId}?filter[include]=status&filter[include]=User`
    )
    .then((res) => dispatch(getJobByIdSuccess(res.data)))
    .catch((err) => dispatch(getJobByIdFail(err)));
};
