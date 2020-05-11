import axios from "axios";
import { EndpointAPI } from "../utils/api";
import * as constants from "../constants/create.constants";

export const createJobRequest = () => ({ type: constants.CREATE_JOB_REQUEST });
export const createJobSuccess = (payload) => ({
  type: constants.CREATE_JOB_SUCCESS,
  payload,
});
export const createJobFail = (payload) => ({
  type: constants.CREATE_JOB_FAIL,
  payload,
});
export const createJob = (param) => (dispatch) => {
  dispatch(createJobRequest());
  return axios
    .post(EndpointAPI.baseUrl + "/Jobs", param)
    .then((res) => dispatch(createJobSuccess(res)))
    .catch((err) => dispatch(createJobFail(err)));
};

export const createTanentRequest = () => ({
  type: constants.CREATE_TANENT_REQUEST,
});
export const createTanentSuccess = (payload) => ({
  type: constants.CREATE_TANENT_SUCCESS,
  payload,
});
export const createTanentFail = (payload) => ({
  type: constants.CREATE_TANENT_FAIL,
  payload,
});
export const createTanent = (param) => (dispatch) => {
  dispatch(createTanentRequest());
  return axios
    .post(EndpointAPI.baseUrl + "/tanents", param)
    .then((res) => dispatch(createTanentSuccess(res)))
    .catch((err) => dispatch(createTanentFail(err)));
};
