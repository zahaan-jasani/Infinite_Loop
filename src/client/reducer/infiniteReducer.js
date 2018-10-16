import * as types from '../actions/actionTypes';
const initialState = {
  username: '',
  role: '',
  password: '',
  notStarted: [],
  inProgress: [],
  closed: [],
  currentPage: 'login',
  userid: 0,
  problem: '',
  expect: '',
  tried: '',
  suspect: '',
  topic: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USERNAME: {
      const newState = Object.assign({}, state);
      newState.username = action.payload.target.value;
      return newState;
    }
    case types.CREATE_ROLE: {
      const newState = Object.assign({}, state);
      newState.role = action.payload.currentTarget.value;
      return newState;
    }
    case types.CREATE_PASSWORD: {
      const newState = Object.assign({}, state);
      newState.password = action.payload.target.value;
      return newState;
    }
    case types.ON_LOGIN_SUBMIT: {
      const newState = Object.assign({}, state);
      //TODO:
    }
    case types.ON_SIGNUP_SUBMIT: {
      const newState = Object.assign({}, state);
      //TODO:
    }
    case types.TOGGLE_PAGE: {
      const newState = Object.assign({}, state);
      //TODO:
    }
    case types.ON_PROBLEM: {
      const newState = Object.assign({}, state);
      newState.problem = action.payload.target.value;
    }
    case types.ON_EXPECT: {
      const newState = Object.assign({}, state);
      newState.problem = action.payload.target.value;
    }
    case types.ON_SUSPECT: {
      const newState = Object.assign({}, state);
      newState.problem = action.payload.target.value;
    }
    case types.ON_TRIED: {
      const newState = Object.assign({}, state);
      newState.problem = action.payload.target.value;
    }
    default:
      return state;
  }
}

