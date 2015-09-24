import React, {Component} from 'react';
import ReactIntl, {FormattedNumber} from 'react-intl';
import Step from './Step';
import CharityHeader from './CharityHeader';
import ButtonGroup from './ButtonGroup';

export default class DonationAmount extends Step{
  render() {
    console.log('origin = ', this.props.origin)
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
        <form className="step-form" onSubmit={this.submit.bind(this)}>
          <h1 className="step-title">Donation amount</h1>

          {/* Select currency */}
          <label htmlFor="step-donation-amount-currency" className="visually-hidden">Currency</label>
          <select id="step-donation-amount-currency" value={this.props.currency} onChange={this.props.changeCurrency}>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="SGD">SGD</option>
          </select>

          {/* Manual amount */}
          <label htmlFor="step-donation-amount-amount" className="visually-hidden">Amount</label>
          <input id="step-donation-amount-amount" />

          {/* Popular amounts */}
          <ButtonGroup name="popularamounts" options={[10, 20, 50]} currency={this.props.currency} />

          {/* Direct debit */}
          <label htmlFor="step-donation-amount-direct-debit" className="contains-checkbox-label">
            <input id="step-donation-amount-direct-debit" type="checkbox" />
            Make this a monthly donation
          </label>

          {/* Hide donation amount */}
          <label htmlFor="step-donation-amount-hide-amount" className="contains-checkbox-label">
            <input id="step-donation-amount-hide-amount" type="checkbox" />
            Hide donation amount
          </label>

          {/* Continue */}
          <button type="submit" class="step-continue">Continue</button>
        </form>
      </section>
    );
  }
};
