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
            form: true
        };
         
      
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit = (e) => {
        
        e.preventDefault()
          
        const loginName = document.getElementById("loginName").value;
        
        const login = {
            name: loginName
        }
        
        if(login.name =="user"){
        this.setState({ showModal: true,
                        form: false});
        this.close();
        } else {
         alert("error");
    }
    }
    
    close() {
            this.setState({ form: false });
        }
    
    render(){
    return (
    <div className="loginForm">
    
    <form className="login loginForm" onSubmit={this.handleSubmit} onHide={this.close}>
        {this.state.showModal ? <Form /> : null }
        
        <h1>Login</h1>  
        <label className="login loginName" for="name">
          Username: 
        <input id="loginName" className="name" type="text" value={this.state.name} />
        <button 
            className="submitButton"
            type="submit"
           >
            Submit
        </button>
        </label>
         
        </form>
    </div>
    );
    } 
};

export default Login;