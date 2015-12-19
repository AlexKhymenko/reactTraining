'use strict';

import React from 'react';

require('styles//DefineWorkout.less');

class DefineWorkout extends React.Component {
  render() {
    return (
      <div id="defineWorkout">
        <h2>Define Workout</h2>
        <label htmlFor="defineName">
          Define Name
          <input id="defineName" type="text"/>
        </label>
        <label>
          Define Type
          <input type="text" id="defineName"/>
        </label>
        <label htmlFor="defineDesc">
          Description
        </label>
        <button id="saveDefinition">Save definition</button>
      </div>
    )
  }
}
// Uncomment properties you need
// DefineWorkoutComponent.propTypes = {};
// DefineWorkoutComponent.defaultProps = {};

export default DefineWorkout;
