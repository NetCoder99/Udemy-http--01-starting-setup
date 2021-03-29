import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';

require('log-timestamp');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;
