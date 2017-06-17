import React, { Component } from 'react';
import PropTypes from 'prop-types';

if(localStorage.getItem('bookReviews')===null){
    localStorage.setItem('bookReviews','[]');
};


class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            books: []
        };
        
    
      //  this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    /*handleChange(event) {
        var value = event.target.value;
        
        this.setState(function(){
            return{
                 name: value,
                 rate: value,
                 text: value
            }
        });
    }
    */
    // handleSubmit(event) {
     
        
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
        
      
        
        }
       
    /*bookData.push(newBook);
        console.log(bookData);
    
        this.setState({books: bookData });
        
        localStorage.bookReviews = JSON.stringify(bookData);
        
       // console.log(localStorage.bookReviews);
    }
    */
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
            onClick={() => this.submit()}
            className="formButton"
            type="submit"
            disabled={!this.state.books}>
            Submit
        </button>
        </form>
        </div>
        )
    }
}

export default Form;