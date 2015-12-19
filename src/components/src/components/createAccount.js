'use strict';

import React from 'react';

require('styles/src/components/Test.less');

class SignIn extends React.Component {

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
       <label htmlFor="confirmPassword">
         Confirm password
         <input type="text" id="confirmPassword"/>
       </label>
       <button id="signIn" onClick={this.props.onAuthComplete.bind(null, this._createAccount)}>
         Sign In
       </button>
     </div>
    );
  }

  _createAccount() {
    return true;
  }
}
// Uncomment properties you need
// TestComponent.propTypes = {};
// TestComponent.defaultProps = {};

export default SignIn;
