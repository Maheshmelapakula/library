// components/books/BooksList.js
import React, { useEffect, useState } from 'react';
import BookService from '../../services/bookService';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const booksData = await BookService.getAllBooks();
      setBooks(booksData);
    } catch (error) {
      // Handle error as needed
    }
  };

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
