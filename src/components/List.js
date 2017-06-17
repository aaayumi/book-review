import React ,{ Component } from 'react';
import Form from './Form';
import App from './App';
import { Link } from 'react-router-dom'

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
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta a eros vel vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam nisi erat, efficitur cursus sapien ullamcorper ac. Curabitur in nunc sapien. Nullam quis varius tortor. Sed id ipsum sit amet sapien tempor placerat quis nec odio. Sed viverra nisl id nibh suscipit efficitur. Etiam tincidunt libero sit amet posuere aliquam. Ut at neque dui. Pellentesque ultrices augue eget diam mollis, dictum volutpat mi pharetra. Vivamus a ornare neque.'},
                 {id:2,
                  name:'LOVE',
                  rate: '2',
                  text: 'Vivamus et urna lacus. Quisque aliquet tincidunt justo, eu placerat sapien interdum at. Mauris in tristique nulla, id ultricies mi. Nunc sagittis cursus lacus varius ultricies. Donec tincidunt venenatis elit in lacinia. Nullam id nulla at diam hendrerit auctor nec non diam. In velit sem, consequat eu ante id, scelerisque posuere tortor. Etiam ac tincidunt enim, id consequat odio. Integer vulputate elit tortor, molestie viverra tellus varius at. Cras at finibus diam. Aenean id elit quis quam mattis iaculis non et orci. Cras sem tellus, dapibus quis nisl sed, fringilla viverra nulla.'},
                 {id:3,
                  name:'I am',
                  rate: '5',
                  text: 'Curabitur quis condimentum ligula. Vestibulum gravida feugiat urna, non fermentum libero sodales quis. Aenean semper augue vel ipsum gravida semper. Donec sem tellus, feugiat sed pharetra id, elementum semper orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean pretium mauris urna, nec viverra metus rhoncus sed. Ut luctus pharetra neque, vitae sagittis massa. Cras accumsan metus et tempor malesuada. Etiam congue, metus sit amet dignissim luctus, leo massa dapibus dui, a convallis felis neque sed lacus.'}];
        
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
    <Link className='loginButton' to='/login'>Login</Link>
    <h1> Book Reveiw </h1>    
    <ul className="list-group">
    {books.map(function(book){
     return(
        <li className="list-group-item"
         key={book.id}
         >
         <h3>Title: {book.name}</h3>
       
         <p>Rate: {book.rate} </p>
   
         <p>Review: {book.text} </p>
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