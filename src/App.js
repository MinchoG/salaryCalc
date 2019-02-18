import React, { Component } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Bottom from './Components/Bottom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Bottom />
      </React.Fragment>
    );
  }
}

export default App;
