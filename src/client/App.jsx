import React, { Component } from 'react';

import PostSection from './components/PostSection.jsx';
import Signup from './components/Signup.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      notStarted: [],
      inProgress: [],
      closed: [],
      role: '',
      loggedIn: false,
    };

    this.onSignupChangedHandler = this.onSignupChangedHandler.bind(this);
    this.onSignupSubmitHandler = this.onSignupSubmitHandler.bind(this);
    this.onSignupNameChangeHandler = this.onSignupNameChangeHandler.bind(this);
    this.onLoginHandler = this.onLoginHandler.bind(this);
  }

  onSignupChangedHandler(event) {
    const newState = Object.assign({}, this.state);
    newState.role = event.currentTarget.value;
    console.log(newState.role);
    this.setState(newState);
  }

  onSignupNameChangeHandler(event) {
    const newState = Object.assign({}, this.state);
    newState.name = event.target.value;
    console.log(newState.name);
    this.setState(newState);
  }

  onSignupSubmitHandler() {
    fetch('http://localhost:3000/createuser', {
      method: 'POST',
      body: {
        name: this.state.name,
        role: this.state.role,
      },
    })
      .then(data => data.json())
      .then(data => {
        this.onLoginHandler();
      })
      .catch(err => {
        console.log(err);
      });
  }

  onLoginHandler() {
    const newState = Object.assign({}, this.state);
    newState.loggedIn = true;
    this.setState(newState);
  }

  render() {
    const { name, notStarted, inProgress, closed, role, loggedIn } = this.state;
    let render = [];
    if (loggedIn) render.push(<PostSection name={name} notStarted={notStarted} inProgress={inProgress} closed={closed} role={role} />);

    return (
      <div>
        <Signup
          onSignupSubmitHandler={this.onSignupSubmitHandler}
          onSignupNameChangedHandler={this.onSignupNameChangeHandler}
          onSignupChangedHandler={this.onSignupChangedHandler}
        />
        {render}
      </div>
    );
  }
}

export default App;