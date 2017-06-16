import React, { Component } from 'react';

class List extends React.Component {
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
    
    return(
    <div>
    <ul className="list-group">
    {books.map(function(book){
     return(
        <li className="list-group-item"
         key={book.id}
         >
         <h3>title: {book.name}</h3>
       
         <p>rate: {book.rate} </p>
   
         <p> review: {book.text}</p>
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