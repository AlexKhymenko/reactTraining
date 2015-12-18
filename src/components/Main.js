require('normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  render() {
    var count = React.Children.only(this.props.children);
    console.log('child', count);
    return (
      <div>
        {this.props.name}
      </div>
    );
    //Working with this.props and image
    /*return (
      <div>
        <img src={yeomanImage} alt="nice" />
        <span>{this.props.name}</span>
      </div>
    )*/

  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
