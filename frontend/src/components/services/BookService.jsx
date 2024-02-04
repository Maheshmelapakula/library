// services/BookService.js

export const getAllBooks = async () => {
  try {
    const response = await fetch('http://localhost:5050/books/allbooks');
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createBook = async (bookData) => {
  try {
    const response = await fetch('http://localhost:5050/books/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });

    if (!response.ok) {
      throw new Error('Failed to create book');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteBook = async (bookId) => {
  try {
    const response = await fetch(`http://localhost:5050/books/delete/${bookId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete book');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
