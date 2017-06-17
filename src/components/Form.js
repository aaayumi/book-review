import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Login from './Login';
import List from './List';

if(localStorage.getItem('bookReviews')===null){
    localStorage.setItem('bookReviews','[]');
};


class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            books: [],
            showModal: true
        };    
    }
        
    submit(){
        
        const bookName = document.getElementById("bookName").value;
        const bookRate = document.getElementById("bookRate").value;
        const bookText = document.getElementById("bookText").value;
        const bookData = this.state.books;
        
        const newBook = {
            name: bookName,
            rate: bookRate,
            text: bookText
        }

        bookData.push(newBook);
        this.setState({books: bookData });
        localStorage.bookReviews = JSON.stringify(bookData);
        
         this.setState({ showModal: false });
        }
    
        button() {
          return ({
              'blue' : this.state.clicked,
              'yellow' : !this.state.clicked
          });  
        }
    
       
    render() {
        return(
        <div>
        <form className="form">
        <div> 
        <label className="bookName" for="title">Add Book Title </label>
        <input id="bookName" className="formInput" type="text" value={this.state.name} onChange={this.handleChange}/>
        </div> 
        <div>    
        <label className="bookRate" for="rate">Add Review Rate </label>
        <input id="bookRate" className="formInput" type="text" value={this.state.rate} onChange={this.handleChange}/>
        </div>    
        <div>    
        <label className="bookText" for="text">Add Review Text </label>
        <input id="bookText" className="formInput" type="text" value={this.state.text} onChange={this.handleChange} />
        </div> 
        
        <button 
           type="submit"
            disabled={!this.state.books}
            onClick={(e) => {this.submit(); {this.setState({clicked: !this.state.clicked})}}}
            >
            send
        </button>
        </form>
        
        <Link to="/">
             Logout
          </Link>
            
        </div>
        )
    }
}

export default Form;