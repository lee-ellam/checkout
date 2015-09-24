import {Map, List, fromJS} from 'immutable';
import {combineReducers} from 'redux';
import {CHANGE_CURRENCY, SET_STATE, SET_STEPS } from './actions';

function setState(state, action) {
  switch (action.type) {
    case SET_STATE:
      return state.merge(action.state);
    default:
      return state;
  }
}

function changeCurrency(state, action) {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return state.set('currency', action.currency);
    default:
      return state;
  }
}

// function setSteps(state, action) {
//   switch (action.type) {
//     case SET_STEPS:
//       return state.update('donation', Map(), fromJS(action.origin));
//     default:
//       return state;
//   }
// }

//TODO: combineReducers doesnt play well with immutable.js when hydrating state
export default function reducer(state = Map(), action) {
  switch (action.type) {
    case SET_STATE:
      return setState(state, action);
    case CHANGE_CURRENCY:
      return changeCurrency(state, action);
    //case SET_STEPS:
      //return setSteps(state, action);
    default:
      return state;
  }
}
