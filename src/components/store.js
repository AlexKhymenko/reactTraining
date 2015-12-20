'use strict';

import React from 'react';

require('styles//Store.less');

class Option extends React.Component {
  render() {
    return (<option>{this.props.value}</option>);
  }
}

var _mockWorkouts = [
  {
    "name": "Murph",
    "type": "fortime",
    "description": "Run 1 Mile \n 100 pull-ups \n 200"
  }, {
    "name": "Tabata Something Else",
    "type": "reps",
    "description": "4 x 20 seconds on 10 seconds off for"
  } ];
class Store extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var opts = [];
    _mockWorkouts.forEach(function(workout) {
      opts.push(<Option value={workout.name} key={workout.name}/>);
    });
    return(
      <div id="logWorkout" className="tabview">
        <h2>Record Workout</h2>
        <label htmlFor="chosenWorkout">
          Workout:
        </label>
        <select id="chosenWorkout">
          {opts}
        </select>
        <label htmlFor="workoutResult">Result:</label>
        <input id="workoutResult" type="text" />
        <input id="workoutDate" type="date" />
        <label htmlFor="notes">Notes:</label>
        <textarea id="notes"></textarea>
        <button>Store</button>
      </div>
    )
  }
}
// Uncomment properties you need
// StoreComponent.propTypes = {};
// StoreComponent.defaultProps = {};

export default Store;
