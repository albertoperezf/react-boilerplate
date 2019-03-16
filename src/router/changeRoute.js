import PropTypes from 'prop-types';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ChangeRoute extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape().isRequired,
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      this.resetScroll();
    }
  }

  resetScroll = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { children } = this.props;

    return children;
  }
}

export default withRouter(ChangeRoute);
