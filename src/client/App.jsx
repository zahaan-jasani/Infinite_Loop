import react, { Component } from 'react';

import PostSection from './components/PostSection.jsx';
import Signup from './components/Signup.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      notStarted: [],
      inProgress: [],
      closed: [],
      role: '',
      loggedIn: false
    };
  }
  render() {
    return(
      <div>
        hello World!
      </div>
    )
  }
}
export default App;