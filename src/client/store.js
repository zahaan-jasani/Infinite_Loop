import { createStore, applyMiddleware, compose } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import combineReducer from './client/reducers/combineReducer';
import {combineReducers} from 'redux';
import infiniteReducer from '../client/reducer/infiniteReducer'
import thunk from 'redux-thunk';

const rootStore = combineReducers({
  infiniteReducer,
})

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  rootStore,
  // infiniteReducer,
  // composeWithDevTools(),
  compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


export default store;
