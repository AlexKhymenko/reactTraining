'use strict';

import React from 'react';

require('styles/src/components/TestStateless.less');

class Authentication extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label htmlFor="username">
          Username
          <input type="text" id="username"/>
        </label>
        <label htmlFor="password">
          Password
          <input type="text" id="password"/>
        </label>
        <button id="signIn" onClick={this.props.onAuthComplete.bind(null, this._doAuth)}>
          Sign In
        </button>
      </div>
    )
  }
  _doAuth() {
    return true;
  }
}

// Uncomment properties you need
// TestStatelessComponent.propTypes = {};
// TestStatelessComponent.defaultProps = {};

export default Authentication;
