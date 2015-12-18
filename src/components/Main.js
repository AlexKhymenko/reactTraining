require('normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  render() {
    return (
      <div>
        <img src="{yeomanImage}"/>
        <span>{this.props.name}</span>
      </div>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
