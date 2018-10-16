import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';


const mapStateToProps = store => ({ 
  
  problem: store.infiniteReducer.problem,
  expect: store.infiniteReducer.expect,
  tried: store.infiniteReducer.tried,
  suspect: store.infiniteReducer.suspect,
  topic: store.infiniteReducer.topic, 
});
const mapDispatchToProps = (dispatch) => {
  return {
    
    onProblem: (event) => {dispatch(actions.onProblem(event))},   
    onExpect: (event) => {dispatch(actions.onExpect(event))},
    onTried: (event) => {dispatch(actions.onTried(event))},
    onSuspect: (event) => {dispatch(actions.onSuspect(event))},
    onCreateSectionSubmit: (event) => {dispatch(actions.onSuspect(event))},
    onTopic: (event) => {dispatch(actions.onTopic(event))},
  };
};

const CreateSection = (props) => {
  
    const divStyle = {
      border: "1px solid black",
      width: "500px",
      height: "200px",
      textAlign: "left",
      display: 'block'
    }
    console.log(props,'in create')
    return (
      <div style = {divStyle}>
        <h2>Please enter the problem: </h2>
        <label>Problem: </label><input onChange = {props.onProblem} type="text" placeholder="" value={props.problem}/><br></br>
        <label>What did I expect to happen: </label><input onChange = {props.onExpect} type="text" placeholder="" value={props.expect}/><br></br>
        <label>What have I tried: </label><input onChange = {props.onTried} type="text" placeholder="" value={props.tried}/><br></br>
        <label>Why I suspect its not working: </label><input onChange = {props.onSuspect} type="text" placeholder="" value={props.suspect}/><br></br>
        <label>Topic: </label><input onChange = {props.onTopic} type="text" placeholder="" value={props.topic}/><br></br>
        <div >
          <button type="submit" onClick={() => 
            props.onCreateSectionSubmit(props.userid,props.problem,props.expect,props.tried,props.suspect,props.topic,)
            }>Submit</button>
        </div>
      </div>
    )
  }
 

export default connect(mapStateToProps, mapDispatchToProps)(CreateSection);
