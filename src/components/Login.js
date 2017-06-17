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
        this.setState({ showModal: true });
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
    <div>
    <div>
    <form className="loginForm" onSubmit={this.handleSubmit} onHide={this.close}>
        {this.state.showModal ? <Form /> : null }
          <label className="loginName" for="name">
          <input id="loginName" className="name" type="text" value={this.state.name} />
          </label>
         <button 
            className="button"
            type="submit"
           >
            Submit
        </button>
        </form>
      </div>
      
    </div>
    );
    } 
};

export default Login;