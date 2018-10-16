import * as types from '../actions/actionTypes';

export const createUsername = (event) => ({
  type: types.CREATE_USERNAME,
  payload: event,
});

export const createRole= (event) => ({
  type: types.CREATE_ROLE,
  payload: event,
});

export const createPassword = (event) => ({
  type: types.CREATE_PASSWORD,
  payload: event,
});

export const onLoginSubmit = (user, pass) => ({
  type: types.ON_LOGIN_SUBMIT,
  payload: {user, pass},
  //requires thunk
});
export const onSignupSubmit = (user, pass, role) => ({
  type: types.ON_SIGNUP_SUBMIT,
  payload: {user, pass, role},
  //requires thunk TODO:
});

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});

export const loginFail = () => ({
  type: types.LOGIN_FAIL,
});

export const onProblem = (event) => ({
  type: types.ON_PROBLEM,
  payload: event,
});

export const onExpect = (event) => ({
  type: types.ON_EXPECT,
  payload: event,
});

export const onTried = (event) => ({
  type: types.ON_TRIED,
  payload: event,
});

export const onSuspect = (event) => ({
  type: types.ON_SUSPECT,
  payload: event,
});

export const changeStatus = (userid, postStatus, postid) => ({
  type: types.CHANGE_STATUS,
  //payload: TODO: thunk
});

export const togglePage = () => ({
  type: types.TOGGLE_PAGE,
});
