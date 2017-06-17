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
import LoginForm from './LoginForm';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {isLoginOpen: false}
    }
    
    openLogin(){
        this.setState({isLoginOpen: true})
    }
    
    closeLogin(){
        this.setState({isLoginOpen: false})
    }
    
     
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
        
        
      /*<div>
      <div className="container">
        <button onClick={() =>this.openLogin()}>Open Login</button>
        <Login isOpen={this.state.isLoginOpen} onClose={()=>this.closeModal()}>
            <LoginForm />
            
            <p><button onClick={()=>this.closeLogin()}>Logout</button></p>
        </Login>
        </div>
    
       <List  />
      </div>
      
      */
    );
  }
} 



export default App;
