// components/books/BooksList.js
import React, { useEffect, useState } from 'react';
import BookService from '../../services/BookService'; // Adjust the import path accordingly

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
      console.error('Error fetching books:', error.message);
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
