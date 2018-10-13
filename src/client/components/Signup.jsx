import React from 'react';

const Signup = (props) => {
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
      <label>Name: </label><input onChange = {props.onSignupNameChangedHandler} type="text" placeholder="Your name"/>
      <div style={dStyle}>
        <label>Choose your role: </label><select defaultValue="" onChange={props.onSignupChangedHandler}>
          <option value="" disabled>Select your role</option>
          <option value='student'>Student</option>
          <option value='helper'>Helper</option>
        </select>
      </div>
      <div style={dStyle}>
        <button type="submit" onClick={props.onSignupSubmitHandler}>Submit</button>
      </div>
    </div>
  )
}
export default Signup;