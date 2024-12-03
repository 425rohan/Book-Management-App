import BookCard from "../components/bookCard.jsx";
import Books from '../utils/booksData.jsx';
import { useState } from "react";

function Booklist(){

    const [inputText, setInput] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(Books);
    function handleClick(){
        let newFilteredBooks = Books.filter(book => {
            return (book.title.toLowerCase().includes(inputText.toLowerCase())) 
        })
        setFilteredBooks(newFilteredBooks);
        if(newFilteredBooks.length === 0){
            
            setTimeout(() => {
                alert('your input does not match any book title, sorry!');
                setFilteredBooks(Books);
            },500)
        }
        setInput('');
    }
    function handleChange(e){
         setInput(e.target.value);
    }
    return(
        <>
        
        
        <h1>Search your favourite books!</h1>
        <div className="search">
          <input type="text" value={inputText} onChange = {handleChange}/>
          <button onClick={handleClick}>Search</button>
        </div>
        <div className="bookList">
        {filteredBooks.map( book => {
            return<BookCard data={book}/>
        })}
        </div>
        </>
        
    )
}

export default Booklist;