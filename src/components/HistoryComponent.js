'use strict';

import React from 'react';

require('styles//History.less');

class ListItem extends React.Component {
  render() {
    return <li>{this.props.name} - {this.props.result}</li>;
  }
}
var _mockHistory =
  [
    {
      "name": "Murph",
      "result": "32:18",
      "notes": "painful, but fun"
    },
    {
      "name": "Tabata Something Else",
      "type": "reps",
      "result": "421",
      "notes": ""
    }];

class History extends React.Component {

  render() {
    var hist = _mockHistory;
    var formatedLi = [];
    hist.forEach(function(object) {
      var histObj = {
        name: object.name,
        result: object.result
      };
      formatedLi.push(<ListItem {...histObj}/>);
    });

    return(
      <div>
        <h2>History</h2>
        <ul>
          {formatedLi}
        </ul>
      </div>
    )
  }
}


// Uncomment properties you need
// HistoryComponent.propTypes = {};
// HistoryComponent.defaultProps = {};

export default History;
