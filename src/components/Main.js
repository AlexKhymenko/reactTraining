require('normalize.css');
require('styles/App.css');

import React from 'react';
import WorkoutLog from './WorkoutComponent'
import Authentication from './AuthenticationComponent'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    }
  }

  render() {
    return (
      <div>{ this.state.signedIn ? <WorkoutLog
        onLogout={this._onLogout} /> : <Authentication
        onAuthComplete={this._onAuthComplete.bind(this)}/> }</div>
    );
  }

  _onAuthComplete( result ) {
  // let the child auth components control behavior here
  if (result()) {
    console.log(result());
    this.setState( { signedIn: true } );
  } }
  _onLogout() {
  this.setState( { signedIn: false } )
}

}

AppComponent.defaultProps = {
};

export default AppComponent;
