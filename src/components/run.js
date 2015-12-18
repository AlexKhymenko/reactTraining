import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';

// Render the main component into the dom
ReactDOM.render(<App name="nice">
  <p key="firsty">a child</p>
  <p key="2">another</p>
</App>, document.getElementById('app'));
