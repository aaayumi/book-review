import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import List from './List';
import Form from './Form';
import App from './App';

/*var Modal = require('react-bootstrap-modal');
var Button = require('react-bootstrap-modal');
*/
class Login extends Component {
     constructor(props){
        super(props);
        this.state={
            login: '',
            showModal: false,
            form: true,
            isLoggedIn: false
            
            
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleLoginClick (){
        this.setState({ isLoggedIn: true});
    }
      handleLogoutClick (){
        this.setState({ isLoggedIn: false});
    }
    
    /*handleSubmit = (e) => {
        
        e.preventDefault()
          
        const loginName = document.getElementById("loginName").value;
        
        const login = {
            name: loginName
        }
        
       ≈
        this.setState({ showModal: true,
                        form: false});
        this.close();
        } else {
         alert("Error! ");
    }
    }
    
    close() {
            this.setState({ form: false });
        }
    */
    handleLoginClick() {
        const loginName = document.getElementById("loginName").value;
        
        const login = {
            name: loginName
        }
        
        if(login.name =="user"){
        this.setState({ isLoggedIn: true,});
        } else {
        alert("Error");
        }
    } 
    
    render(){
       
    const isLoggedIn = this.state.isLoggedIn;
    
    let button = null;
        
    if (!isLoggedIn) {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
        
    return (
    <div className="loginForm">
    <form className="login loginForm" >
     
        <h1>Login</h1>
        
        <label className="login loginName" for="name">
        Username: 
        
        <input id="loginName" className="name" type="text" value={this.state.name} />
       
        <LoggedIn isLoggedIn={isLoggedIn} />
        {button} 
        </label>
         
    </form>

    <p>text</p>   
    </div>
    );
    } 
};

function LoggedIn(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Form />;
  }
  return null;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}


export default Login;