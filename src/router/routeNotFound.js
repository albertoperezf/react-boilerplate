import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import RouteNotFount from '../components/RouteNotFound/RouteNotFount';

class CaptureRouteNotFound extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape().isRequired,
  }

  render() {
    const { children, location } = this.props;

    return location
    && location.state
    && location.state.notFoundError
      ? (
        <RouteNotFount />
      ) : (
        children
      );
  }
}

export default withRouter(CaptureRouteNotFound);
