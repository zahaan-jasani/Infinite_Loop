import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import TestLoginPage from './TestLoginPage';

import HomePage from './HomePage';




const mapStateToProps = store => ({
  // provide pertinent state here
  currentPage: store.infiniteReducer.currentPage,
});

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let currPage;
      switch(this.props.currentPage) {
        case 'login':
        // currPage = <TestLoginPage />;
          currPage = <LoginPage />;
          // currPage = <HomePage />;
          break;
        case 'home':
          currPage = <HomePage />;
          break;
        case 'signup':
          currPage = <TestLoginPage />;
          break;

        default:
        currPage = <LoginPage />;
        break;
      }
      
      return(
        <div>
          {currPage}
        </div>
      )
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(App);
