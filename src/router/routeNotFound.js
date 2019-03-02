import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class RouteNotFound extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.string.isRequired,
  }

  render() {
    const { children, location } = this.props;

    if (location && location.state && location.state.notFoundError) {
      return (
        <div>
          <h1>
Error Page - The following route dont exist
          </h1>
        </div>
      );
    }

    return children;
  }
}

export default withRouter(RouteNotFound);
