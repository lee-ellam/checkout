export const SET_STATE = 'SET_STATE';
export const SET_STEPS = 'SET_STEPS';
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
export const SET_DIRECT_DEBIT = 'SET_DIRECT_DEBIT';
export const SET_HIDE_DONATION = 'SET_HIDE_DONATION';

export function setState(state) {
  return { type: SET_STATE, state };
}

export function setSteps(steps) {
  return { type: SET_STEPS, steps };
}

export function changeCurrency(currency) {
  return { type: CHANGE_CURRENCY, currency };
}

export function changeAmount(amount) {
  return { type: CHANGE_AMOUNT, amount };
}

export function changeDirectDebit(isDirectDebit) {
  return { type: SET_DIRECT_DEBIT, isDirectDebit };
}

export function changeHideDonation(isDonationHidden) {
  return { type: SET_HIDE_DONATION, isDonationHidden };
}
