import {Map, List, fromJS} from 'immutable';
import {combineReducers} from 'redux';
import * as actions from './actions';

function setState(state, newState) {
  return state.merge(newState);
}

function changeCurrency(state, currency) {
  return state.set('currency', currency);
}

function changeAmount(state, amount) {
  return state.set('amount', amount);
}

function setDirectDebit(state, isDirectDebit) {
  return state.set('direct_debit', isDirectDebit);
}

function setHideDonation(state, isDonationHidden) {
  return state.set('hide_donation', isDonationHidden);
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
    case actions.SET_STATE:
      return setState(state, action.state);
    case actions.CHANGE_CURRENCY:
      return changeCurrency(state, action.currency);
    case actions.CHANGE_AMOUNT:
      return changeAmount(state, action.amount);
    case actions.SET_DIRECT_DEBIT:
      return setDirectDebit(state, action.isDirectDebit);
    case actions.SET_HIDE_DONATION:
      return setHideDonation(state, action.isDonationHidden);
    //case SET_STEPS:
      //return setSteps(state, action);
    default:
      return state;
  }
}
