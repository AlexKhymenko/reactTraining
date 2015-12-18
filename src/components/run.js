import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';

var greeting = {
  name: 'Alex',
  surname: 'ggg'
};
// Render the main component into the dom
ReactDOM.render(<App {...greeting}>
</App>, document.getElementById('app'));
