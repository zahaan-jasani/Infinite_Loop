import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import CreateSection from './CreateSection';
import PostSection from './PostSection';

// const mapStateToProps = store => ({

// });

// const mapDispatchToProps = (dispatch) => {
//   return {
  
//   };
// };

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CreateSection />
        <PostSection />
      </div>
    )
  }
}
// export default HomePage;
export default HomePage;
