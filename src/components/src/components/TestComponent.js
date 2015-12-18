'use strict';

import React from 'react';

require('styles/src/components/Test.less');

class TestComponent extends React.Component {
  render() {
    return (
      <div className="test-component">
        Please edit src/components/src/components//TestComponent.js to update this component!
      </div>
    );
  }
}

TestComponent.displayName = 'SrcComponentsTestComponent';

// Uncomment properties you need
// TestComponent.propTypes = {};
// TestComponent.defaultProps = {};

export default TestComponent;
