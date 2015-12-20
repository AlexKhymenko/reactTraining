'use strict';

import React from 'react';
import SignIn from './src/components/signIn'
import CreateAccount from './src/components/createAccount'
require('styles//Authentication.less');



let yeomanImage = require('../images/yeoman.png');

class Authentication extends React.Component {
 constructor(props) {
   super(props);
 }
  render() {
    return (
      <div>
        <SignIn onAuthComplete={this.props.onAuthComplete}/>
        <CreateAccount onAuthComplete={this.props.onAuthComplete}/>
      </div>
    )
  }

  _doAuth() {
    return true;
  }

}

export default Authentication;
