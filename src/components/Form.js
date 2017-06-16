import React, { Component } from 'react';
import PropTypes from 'prop-types';

if(localStorage.getItem('bookReviews')===null){
    var initialBooks = 
                 [{id:1,
                  name:'The Ocean',
                  rate: '4',
                  text: 'blablablablablablablablablabla'},
                 {id:2,
                  name:'LOVE',
                  rate: '2',
                  text: 'blablablablablablablabla'},
                 {id:3,
                  name:'I am',
                  rate: '5',
                  text: 'blablablablablablablabla'}];
    localStorage.setItem('book-reviews',initialBooks);
   
}

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            books:[]
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
        
        console.log(bookData[0]);
    }
    
    render() {
        return(
        <form className="form">
        <label className="bookName" for="title">Add Book Title
        <input id="bookName" type="text" value={this.state.name} onChange={this.handleChange}/>
        </label>
            
        <label className="bookRate" for="rate">Add Review Rate
        <input id="bookRate" type="text" value={this.state.rate} onChange={this.handleChange}/>
        </label>
            
        <label className="bookText" for="text">Add Review Text
        <input id="bookText" type="text" value={this.state.text} onChange={this.handleChange} />
        </label>
        
        <button 
            onClick={() => this.submit()}
            className="button"
            type="submit"
            disabled={!this.state.books}>
            Submit
        </button>
        </form>
        )
    }
}

export default Form;