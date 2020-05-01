import axios from "axios";
import * as constants from "../constants/user.constants";
import { EndpointAPI } from "../utils/api";

export const loginUserRequest = () => ({
  type: constants.AUTH_USER_LOGIN_REQUEST,
});

export const loginUserSuccess = ({ params }) => ({
  type: constants.AUTH_USER_LOGIN_SUCCESS,
  payload: params,
});

export const loginUserFail = ({ params }) => ({
  type: constants.AUTH_USER_LOGIN_FAIL,
  payload: params,
});

export const userProfileRequest = () => ({
  type: constants.AUTH_USER_PROFILE_REQUEST,
});

export const userProfileSuccess = ({ params }) => ({
  type: constants.AUTH_USER_PROFILE_SUCCESS,
  payload: params,
});

export const userProfileFail = ({ params }) => ({
  type: constants.AUTH_USER_PROFILE_FAIL,
  payload: params,
});

export const authenticateUser = (credential) => {
  const url = EndpointAPI.baseUrl + "/Users/login";
  return (dispatch) => {
    dispatch(loginUserRequest());
    return axios
      .post(url, { credential })
      .then((res) => {
        const { data } = res;
        if (data) {
          dispatch(loginUserSuccess(data));
          const profileUrl = EndpointAPI.baseUrl + "/Profiles";
          const reqData = { userId: data.userId };
          dispatch(userProfileRequest());
          return axios
            .get(profileUrl, { reqData })
            .then((res) => {
              const { data } = res;
              if (data) {
                dispatch(userProfileSuccess(data));
              }
            })
            .catch((err) => dispatch(userProfileFail(err)));
        }
      })
      .catch((err) => dispatch(loginUserFail(err)));
  };
};

export const createUserRequest = () => ({
  type: constants.AUTH_USER_SIGNUP_REQUEST,
});

export const createUserSuccess = ({ params }) => ({
  type: constants.AUTH_USER_SIGNUP_SUCCESS,
  payload: params,
});

export const createUserFail = ({ params }) => ({
  type: constants.AUTH_USER_SIGNUP_FAIL,
  payload: params,
});

export const createUserAccount = (params) => {
  const url = EndpointAPI.baseUrl + "/Users";
  return (dispatch) => {
    dispatch(createUserAccount());

    const data = {
      realm: params.firstname + " " + params.lastname,
      username: params.email,
      email: params.email,
      password: params.password,
    };

    return axios
      .post(url, { data })
      .then((res) => {
        const { data } = res;
        if (data) {
          const profileData = {
            fullname: params.firstname + " " + params.lastname,
            emailAddress: params.email,
            contactno: params.contactno,
            userId: data.userId,
          };
          const profileUrl = EndpointAPI.baseUrl + "/Profiles";
          return axios
            .post(profileUrl, { profileData })
            .then((res) => {
              const { data } = res;
              dispatch(createUserSuccess(data));
            })
            .catch((err) => dispatch(createUserFail(err)));
        }
      })
      .catch((err) => dispatch(createUserFail(err)));
  };
};
