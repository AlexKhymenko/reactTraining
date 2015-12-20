'use strict';

import React from 'react';

require('styles//Navigation.less');

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <li>
          <a href="#" onClick={this.props.onNav.bind(null, this._nav('define'))}>Define Workout</a>
        </li>
        <li>
          <a href="#" onClick={this.props.onNav.bind(null, this._nav('store'))}>Record a workout</a>
        </li>
        <li>
          <a href="#" onClick={this.props.onNav.bind(null, this._nav('history'))}>View History</a>
        </li>
        <li>
          <a href="#" onClick={this.props.onLogout}>Logout</a>
        </li>
      </ul>
    )
  }
  _nav(view) {
    console.log(view, 'view');
    return view;
  }
}

// Uncomment properties you need
// NavigationComponent.propTypes = {};
// NavigationComponent.defaultProps = {};

export default Navigation;
