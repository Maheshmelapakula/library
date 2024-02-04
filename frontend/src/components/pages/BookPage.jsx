// components/BooksPage.js
import React, { useState, useEffect } from 'react';
import { getAllBooks, createBook, deleteBook } from '../services/BookService';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newBookData, setNewBookData] = useState({ title: '', author: '', journal: '' });
  const [editBookId, setEditBookId] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const booksData = await getAllBooks();
      setBooks(booksData);
    } catch (error) {
      // Handle error as needed
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      fetchBooks(); // Refresh the books after deletion
    } catch (error) {
      // Handle error as needed
    }
  };

  const handleEdit = (id) => {
    // Set the book ID to be edited and open the modal
    setEditBookId(id);
    setShowCreateModal(true);
  };

  const handleCreateModalOpen = () => {
    setShowCreateModal(true);
  };

  const handleCreateModalClose = () => {
    setShowCreateModal(false);
    setEditBookId(null); // Clear edit book ID
    // Clear new book data when closing the modal
    setNewBookData({ title: '', author: '', journal: '' });
  };

  const handleCreateBook = async () => {
    try {
      if (editBookId) {
        // If editing, send a PUT request instead of POST
        // Implement the updateBook function in the BookService.js
        // Ensure your server handles the update request properly
        // await updateBook(editBookId, newBookData);
      } else {
        // If not editing, proceed with creating a new book
        await createBook(newBookData);
      }

      // Close the modal after creating/updating a book
      handleCreateModalClose();
      // Refresh the books list
      fetchBooks();
    } catch (error) {
      console.error('Error creating/updating book:', error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Books</h1>
      <button style={styles.createButton} onClick={handleCreateModalOpen}>
        Create Book
      </button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Journal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.journal}</td>
              <td>
                <button
                  style={styles.buttonEdit}
                  onClick={() => handleEdit(book._id)}
                >
                  Edit
                </button>
                <button
                  style={styles.buttonDelete}
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Create/Edit Book Modal */}
      {showCreateModal && (
        <div style={styles.modal}>
          <h2>{editBookId ? 'Edit Book' : 'Create a New Book'}</h2>
          <form>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={newBookData.title}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Author:
              <input
                type="text"
                name="author"
                value={newBookData.author}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Journal:
              <input
                type="text"
                name="journal"
                value={newBookData.journal}
                onChange={handleInputChange}
              />
            </label>
          </form>
          <button style={styles.buttonCreate} onClick={handleCreateBook}>
            {editBookId ? 'Update Book' : 'Create Book'}
          </button>
          <button style={styles.buttonCancel} onClick={handleCreateModalClose}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  createButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  buttonEdit: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '5px',
  },
  buttonDelete: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    cursor: 'pointer',
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: '1000',
  },
  buttonCreate: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '5px',
  },
  buttonCancel: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default BooksPage;
