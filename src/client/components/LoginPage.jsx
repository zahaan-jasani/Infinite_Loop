import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'

const mapStateToProps = store => ({
  username: store.username,
  password: store.password,
  role: store.role,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createUsername: (event) => {
      dispatch(actions.createUsername(event));
    },
    createPassword: (event) => {
      dispatch(actions.createPassword(event));
    },
    createRole: (event) => {
      dispatch(actions.createRole(event));
    },
    togglePage: () => {
      dispatch(actions.togglePage());
    },
    onSignupSubmit: (user, pass, role) => {
      dispatch(actions.onSignupSubmit(user, pass, role));
    },
    onLoginSubmit: (user, pass) => {
      dispatch(actions.onLoginSubmit(user, pass));
    },

  };
};

const LoginPage = (props) => {
  const divStyle = {
    border: "1px solid black",
    width: "300px",
    height: "200px",
    textAlign: "center"
  }
  const dStyle = {
    marginBottom: '5px',
    marginTop: '5px'
  }
  return (
    <div style = {divStyle}>
      <h2>Please enter your name: </h2>
      {/* <label>Name: </label><input onChange = {props.onSignupNameChangedHandler} type="text" placeholder="Your name"/> */}
      <label>UserName: </label><input onChange = {props.createUsername} type="text" placeholder="Username" value={props.username}/>

      <label>Password: </label><input onChange = {props.createPassword} type="text" placeholder="Password" value={props.password}/>
      <div style={dStyle}>
        <label>Choose your role: </label><select defaultValue="" onChange={props.createRole}>
          <option value="" disabled>Select your role</option>
          <option value='student'>Student</option>
          <option value='helper'>Helper</option>
        </select>
      </div>
      <div style={dStyle}>
        <button type="button" onClick={() => props.onLoginSubmit(props.username, props.password)}>Login</button>
        <br></br>
        <button type="button" onClick={() => props.onSignupSubmit(props.username, props.password, props.role)}>Sign Up</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);