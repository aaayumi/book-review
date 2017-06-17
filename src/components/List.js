import React ,{ Component } from 'react';
import Form from './Form';
import App from './App';

if(!localStorage.hasOwnProperty('bookReviews')){
    localStorage.setItem('bookReviews')
      console.log(localStorage.bookReviews);
}

class List extends React.Component {
       constructor(props){
        super(props);
        this.state={
            books: JSON.parse(localStorage.getItem('bookReviews'))
        }
       }; 
    
    render(){
    var books = [{id:1,
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

        
        
        // array 
        
        const bookData = this.state.books;
        
        const newBook = {
            name: bookData[0].name,
            rate: bookData[0].rate,
            text: bookData[0].text
        }
        
       console.log(newBook);
       books.push(newBook);
       
    return(
    <div>
    <ul className="list-group">
    {books.map(function(book){
     return(
        <li className="list-group-item"
         key={book.id}
         >
         <h3>title: {book.id} {book.name}</h3>
       
         <p>rate: {book.rate} </p>
   
         <p> review: {book.text} </p>
        </li>
        )
    }
    )}
    </ul>
    </div>
    )
}
}
export default List;