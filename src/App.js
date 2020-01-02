import React, { Component } from 'react';
import CounterContainer from './CounterContainer';
// import Navbar from './navbar';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <CounterContainer />
      </div>
    );
  }
}

export default App;
