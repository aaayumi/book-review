import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink,Switch } from 'react-router'


import List from './List';
import Form from './Form';
import Login from './Login';

const Main =() =>(
<main>
 <Switch>
  <Route path='/list' component={List} />
 </Switch>
</main>
)

class App extends Component {
  render() {
    return (
      <div className="container">
       <Login />
       <Form />
       <List  />
      </div>
    );
  }
}

export default App;
