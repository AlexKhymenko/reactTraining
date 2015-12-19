require('normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {


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
       <button id="signIn" onClick="this.props.onAuthComplete.bind(null, this.doAuth)">
          Sign In
       </button>
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
