require('normalize.css');
require('styles/App.css');

import React from 'react';
import SignIn from './src/components/signIn'
import CreateAccount from './src/components/createAccount'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

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

AppComponent.defaultProps = {
};

export default AppComponent;
