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
    <ul>
    {books.map(function(book){
     return(
        <li
         key={book.id}
         >
         title: {book.name}
          <br />
         rate: {book.rate}
           <br />
         review: {book.text}
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