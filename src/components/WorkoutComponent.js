'use strict';

import React from 'react';
import Nav from './navigation';
import DefineWorkout from './defineWorkout';
import StoreWorkout from './store';
import History from './HistoryComponent';
require('styles//Workout.less');

class WorkoutLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: define};
  }

  render() {
    return(
      <div>
        <h1>Workout Log</h1>
        <Nav onLogout={this.props.onLogout}
             onNav={this._onNav.bind(this)}/>
        {this.state.view === 'define' ?
          <DefineWorkout /> : "" }
        {this.state.view === 'store' ?
          <StoreWorkout /> : "" }
        {this.state.view === "history" ?
          <History /> : "" }
      </div>
    )
  }

  _onNav( theView ) {
    console.log(theView);
  this.setState( { view: theView });
}
}
// Uncomment properties you need
// WorkoutComponent.propTypes = {};
// WorkoutComponent.defaultProps = {};

export default WorkoutLog;
