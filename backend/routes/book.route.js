const express = require('express')

const bookRouter = express.Router()

const {BookModel} = require('../model/Book.model')

bookRouter.get('/', (req, res) => {
    res.send({msg:"books"})
})



bookRouter.post('/create', (req, res) => {
    try {
      const { title, author, journal } = req.body;
  
      // Validate the presence of required parameters (title and author)
      if (!title || !author) {
        return res.status(400).json({ message: 'Title and Author are required parameters.' });
      }
  
      // Create the book (assuming you have a BookModel)
      const newBook = new BookModel({ title, author, journal });
      newBook.save();
  
      res.status(201).json({ message: 'Book created successfully', book: newBook });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

//   bookRouter.get('/', async (req, res) => {
//     try {
//       const books = await BookModel.find();
//       res.status(200).json(books);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   });




// Assuming you want to get all books
// Assuming you want to get all books
bookRouter.get('/allbooks', async (req, res) => {
    try {
      const books = await BookModel.find();
  
      if (!books || books.length === 0) {
        return res.status(404).json({ message: 'No books found' });
      }
  
      res.status(200).json(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  

//   bookRouter.put('/books/update/:id', async (req, res) => {
//     try {
//       const { title, author, journal } = req.body;
  
//       // Validate the presence of required parameters (title and author)
//       if (!title || !author) {
//         return res.status(400).json({ message: 'Title and Author are required parameters.' });
//       }
  
//       const updatedBook = await BookModel.findByIdAndUpdate(
//         req.params.id,
//         { title, author, journal },
//         { new: true } // Return the updated document
//       );
  
//       if (!updatedBook) {
//         return res.status(404).json({ message: 'Book not found' });
//       }
  
//       res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   });
  
//   bookRouter.delete('/:id', async (req, res) => {
//     try {
//       const deletedBook = await BookModel.findByIdAndDelete(req.params.id);
  
//       if (!deletedBook) {
//         return res.status(404).json({ message: 'Book not found' });
//       }
  
//       res.status(200).json({ message: 'Book deleted successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   });
  
  
  

  
  
  

module.exports = {bookRouter}