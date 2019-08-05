import React, { Component, PropTypes } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  static propTypes = {
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  };

  logFormDataToConsole = (event) => {
    console.log('Form Values', this.props.formValues);
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <button
        disabled={this.state.isClicked}
        onClick={this.logFormDataToConsole}
      >
        Contact Us
      </button>
    );
  }
}
