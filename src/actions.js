export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const SET_STATE = 'SET_STATE';
export const SET_STEPS = 'SET_STEPS';

export function changeCurrency(currency) {
  return { type: CHANGE_CURRENCY, currency };
}

export function setState(state) {
  return { type: SET_STATE, state };
}

export function setSteps(steps) {
  return { type: SET_STEPS, steps };
}
