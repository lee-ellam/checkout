import React, {Component} from 'react';

export default class Step extends Component{
  back() {
    // Handle history.back
    // history.go(-1);
  }

  isValid() {
    // Handle form validation or return true
    return true;
  }

  submit() {
    // Validate
    const valid = this.isValid();
    if (valid) {
      return fetch(this.props.url);
    }
  }

  fetch(url) {
    // Do ajax request to url
  }
};
