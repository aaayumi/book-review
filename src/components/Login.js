import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './List';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            login: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit = (e) => {
        
        e.preventDefault()
          
        const loginName = document.getElementById("loginName").value;
        
        const login = {
            name: loginName
        }
         console.log(login.name)
        if(login.name =="user"){
            
           //var List = [];
          //  List.push(<li className={this.props.name} />)
             
        } else {
         alert("error");
    }
    }
    render() {
        return (
        <form className="loginForm" onSubmit={this.handleSubmit}>
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
        )
    }
}

export default Login;