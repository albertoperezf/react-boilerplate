// import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class About extends Component {
  static propTypes = {
    // children: PropTypes.node.isRequired,
    // location: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <h1>
          About Page!
        </h1>

        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>
      </div>
    );
  }
}
