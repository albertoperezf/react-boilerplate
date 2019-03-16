import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    error: '',
    hasError: false,
    info: '',
  };

  componentDidCatch(error, info) {
    this.setState({
      error,
      hasError: true,
      info,
    });
  }

  render() {
    const { children } = this.props;
    const { error, hasError, info } = this.state;

    if (hasError) {
      return (
        <div>
          <h1>
            {error}
          </h1>
          <p>
            {info}
          </p>
        </div>
      );
    }

    return children;
  }
}
