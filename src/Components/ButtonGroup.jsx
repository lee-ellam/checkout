import React, {Component} from 'react';
import ReactIntl, {FormattedNumber} from 'react-intl';

export default class ButtonGroup extends Component{
  getOptions() {
    return this.props.options || [];
  }

  render() {
    return (
      <fieldset className="button-group">
        <legend className="visually-hidden">Popular donations</legend>
        {this.getOptions().map((option, i) =>
          <label htmlFor={`option${i}`} key={`option${i}`}><FormattedNumber value={option} style="currency" currency={this.props.currency} className="button-group-label" />
            <input type="radio" id={`option${i}`} name={this.props.name} value={option} checked={option === this.props.currentAmount} className="button-group-radio" onChange={(e) => this.props.updateAmount(parseInt(e.target.value, 10))} />
          </label>
        )}
      </fieldset>
    );
  }
};
