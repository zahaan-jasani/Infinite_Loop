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
export const createFirstname = (event) => ({
  type: types.CREATE_FIRSTNAME,
  payload: event,
});
export const createLastname = (event) => ({
  type: types.CREATE_LASTNAME,
  payload: event,
});

export const updateUnclaimed = (arr) => ({
  type: types.UPDATE_UNCLAIMED,
  payload: arr,
});
export const updateClaimed = (arr) => ({
  type: types.UPDATE_CLAIMED,
  payload: arr,
});
export const updateClosed = (arr) => ({
  type: types.UPDATE_CLOSED,
  payload: arr,
});


// a function to get listing, which will be used several times
export const fetchData = (dispatch) => {
      const notStarted = [];
      const inProgress = [];
      const closed = [];
      fetch('http://localhost:3000/home', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
      .then(posts => posts.json())
      .then(posts => {
        console.log(posts);
        posts.forEach((post) => {
          console.log(post,'post');
          if (post.status === 'unclaimed') {
            notStarted.push(post);
          }
          if (post.status === 'claimed') {
            inProgress.push(post)
          }
          if (post.status === 'closed') {
            closed.push(post);
          }
        })
        dispatch(updateUnclaimed(notStarted));
        dispatch(updateClaimed(inProgress));
        dispatch(updateClosed(closed));
      })
}

export const onSignupSubmit = ({ username, password, role, firstname, lastname }) => {
  // type: types.ON_SIGNUP_SUBMIT,
  // payload: {user, pass, role},
  //requires thunk TODO:
  if (role === 'helper') {
    role = 2;
  } else {
    role = 1;
  }
  return function (dispatch) {
    return fetch('http://localhost:3000/createuser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        password,
        role,
        firstname,
        lastname,
      }),
    })
    .then((res) => {
      // wfrtyui
      if(res.status === 200) {
        dispatch(signUpSuccess());
        fetchData(dispatch);
      }
      else dispatch(signUpFail())
      })
      // when should i make this get request?
    // .then(() => {
    //   // dispatch(fetchData) // fetchData(dispatch)
    //   fetchData(dispatch);
    // })
}
};
export const saveLoginInfo = (data) => ({
  type: types.SAVE_LOGIN_INFO,
  payload: data,
})
// export const createUsername = (event) => ({
//   type: types.CREATE_USERNAME,
//   payload: event,
// });
export const onLoginSubmit = (user, pass) => {

  return function (dispatch) {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        username:user,
        password:pass,
      }),
    })
    
    .then(res =>{
      console.log(res.status)
      if(res.status === 200) {
        console.log('success');
        dispatch(loginSuccess());
        fetchData(dispatch);
      }
      else dispatch(loginFail())
      return res;
    })
    .then((res) => {
      return res.json()
      dispatch(saveLoginInfo(res[0]))
      console.log(res,'res in onLoginSubmit')
      })
};
};

export const signUpSuccess = () => ({
  type: types.ON_SIGNUP_SUCCESS,
});

export const signUpFail = () => ({
  type: types.ON_SIGNUP_FAIL,
});
export const loginSuccess = () => ({
  type: types.ON_LOGIN_SUCCESS,
});

export const loginFail = () => ({
  type: types.ON_LOGIN_FAIL,
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
export const onTopic = (event) => ({
  type: types.ON_TOPIC,
  payload: event,
});

export const changeStatus = (userid, postStatus, postid) => {
  fetch('http://localhost:3000/status', {
    headers: {'Content-Type': 'application/json'},
    method:'PATCH',
    body: JSON.stringify({
      status: postStatus,
      postid: postid,
      userid: userid,
    })
  })
  .then(res => res.json())
  .then((res)=>{
    if(res.status === '200') fetchData(dispatch);
    else console.log('fail in actions changeStatus')
  }
    
  )
  // payload: TODO: thunk
};


export const togglePage = () => ({
  type: types.TOGGLE_PAGE,
});

export const onCreateSectionSubmit = (userid, problem, expect, tried, suspect, topic) => {
  // type: types.ON_CREATESECTION_SUBMIT,
  //payload: TODO: thunk
  return fetch('http://localhost:3000/createpost', {
    headers: {'Content-Type': 'application/json'},
    method:'PATCH',
    body: JSON.stringify({
      // status: postStatus,
      // postid: postid,
      // all these 6 fields enough??
      userid: userid,
      problem: problem,
      expect: expect,
      trid: tried,
      suspect:suspect,
      topic: topic,
      // createdby, resolvedby, problem, expect, tried, suspect, topic
    })
  })
  .then(dispatch(fetchData()))
}