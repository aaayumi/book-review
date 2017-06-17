import React ,{ Component } from 'react';
import Form from './Form';
import { Link } from 'react-router-dom'

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            login: '',
            isFormOpen: false
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
         this.setState({isFormOpen: true})
        } else {
         alert("error");
    }
    }

    openForm(){
        this.setState({isFormOpen: true})
    }
    
    closeForm(){
        this.setState({isFormOpen: false})
    }

    render() {
        return (
        <div>
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
            
        </div>
        )
    }
}



export default LoginForm;