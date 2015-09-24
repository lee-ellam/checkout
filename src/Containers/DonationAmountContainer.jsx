import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import DonationAmount from '../Components/DonationAmount';

function mapStateToProps(state) {
  return {
    origin: state.get('origin').toJS(),
    currency: state.get('currency'),
    amount: state.get('amount'),
    directDebit: state.get('direct_debit'),
    hideDonation: state.get('hide_donation')
  };
}

export const DonationAmountContainer = connect(mapStateToProps, actions)(DonationAmount);
