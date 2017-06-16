import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="container">
       <Form />
       <List />
      </div>
    );
  }
}

export default App;
