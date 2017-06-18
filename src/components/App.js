import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import List from './List';
import Form from './Form';
import Login from './Login';

class App extends Component {
     
  render() {
    return (
    <Router>
      <div>
        <Switch>
         <Route exact path='/' component={List} />
         <Route path='/login' component={Login} />
         <Route path='/login/:from' component={Form} />
         <Route render={function () {
          return <p> Not Found </p>
         }} />
        </Switch>
      </div>
    </Router>
        
    );
  }
} 



export default App;
