import React, {Component} from 'react';
import ReactIntl, {FormattedNumber} from 'react-intl';
import Step from './Step';
import CharityHeader from './CharityHeader';
import ButtonGroup from './ButtonGroup';

export default class DonationAmount extends Step{
  updateCurrency(event) {
    this.props.changeCurrency(event.target.value);
  }

  updateAmount(event) {
    this.props.changeAmount(parseInt(event.target.value, 10));
  }

  updateDirectDebit(event) {
    this.props.changeDirectDebit(!!event.target.value);
  }

  updateHideDonation(event) {
    this.props.changeHideDonation(!!event.target.value);
  }

  isValid() {
    if (this.props.amount) return true;
    return false;
  }

  render() {
    return (
      <section className="step step-donation-amount">
        <header className="step-header">
          <div className="step step-back-link">
            <a onClick={this.back.bind(this)} title={this.props.previous_step || this.props.origin.data.name}>
              {this.props.previous_step || this.props.origin.data.name}
            </a>
          </div>
          {
            this.props.origin.type === 'charity' ?
              <CharityHeader image={this.props.origin.data.image} name={this.props.origin.data.name} statement={this.props.origin.data.statement} /> :
              <div>Donate to nowhere</div>
          }
        </header>
        <form className="step-form" onSubmit={this.submit.bind(this)} noValidate>
          <h1 className="step-title">Donation amount</h1>

          {/* Select currency */}
          <label htmlFor="step-donation-amount-currency" className="visually-hidden">Currency</label>
          <select id="step-donation-amount-currency" value={this.props.currency} onChange={this.updateCurrency.bind(this)}>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="SGD">SGD</option>
          </select>

          {/* Manual amount */}
          <label htmlFor="step-donation-amount-amount" className="visually-hidden">Amount</label>
          <input id="step-donation-amount-amount" value={this.props.amount} onChange={this.updateAmount.bind(this)} />

          {/* Popular amounts */}
          <ButtonGroup name="popularamounts" options={[10, 20, 50]} currentAmount={this.props.amount} currency={this.props.currency} updateAmount={this.props.changeAmount} />

          {/* Direct debit */}
          <label htmlFor="step-donation-amount-direct-debit" className="contains-checkbox-label">
            <input id="step-donation-amount-direct-debit" type="checkbox" value={this.props.directDebit} onChange={this.updateDirectDebit.bind(this)} />
            Make this a monthly donation
          </label>

          {/* Hide donation amount */}
          <label htmlFor="step-donation-amount-hide-amount" className="contains-checkbox-label">
            <input id="step-donation-amount-hide-amount" type="checkbox" value={this.props.hideDonation} onChange={this.updateHideDonation.bind(this)} />
            Hide donation amount
          </label>

          {/* Continue */}
          <button type="submit" className="step-continue" disabled={!this.isValid()}>Continue</button>
        </form>
      </section>
    );
  }
};

DonationAmount.propTypes = {
  currency: React.PropTypes.string.isRequired,
  amount: React.PropTypes.number,
  changeAmount: React.PropTypes.func.isRequired,
  changeCurrency: React.PropTypes.func.isRequired
};
