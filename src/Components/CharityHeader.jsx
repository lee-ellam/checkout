import React, {Component} from 'react';

export default class CharityHeader extends Component{
  render() {
    return (
      <div className="charity-header">
        <img src={this.props.image} alt={this.props.name} className="charity-header-logo" />
        <div className="charity-header-title">
          Donate to <strong>{this.props.name}</strong> and <strong>{this.props.statement}</strong>
        </div>
      </div>
    );
  }
};
