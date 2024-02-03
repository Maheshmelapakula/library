const express = require("express")
const jwt = require("jsonwebtoken")
const {BookModel} = require("../model/Book.model");
const { UserModel } = require("../model/User.model");
const { authentication } = require("../middlewares/authenticate.middleware");
// const {checkUserRole} = require("../middlewares/checkUserRole");

const bookRouter = express.Router();

bookRouter.get("/", async (req, res) => {
    const books = await BookModel.find()
    res.send({books : books})
})

bookRouter.post("/create", async (req, res) => {
    try {
      const { title, author } = req.body;
      
      // You can add additional validation for title and author here if needed
      
      const book = await authentication.createBook({ title, author });
      res.status(201).json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


bookRouter.patch("/edit/:bookID", async (req, res) => {
        const bookID = req.params.bookID
        const payload = req.body;

        const userID = req.userID
        const user = await UserModel.findOne({_id : userID})
        const user_email = user.email;

        const book = await BookModel.findOne({_id : bookID})
        const author_email = book.author_email

        console.log(user_email,author_email)

        if(user_email !== author_email){
            return res.send({msg : "You are not authorised to do this operation"})
        }
        else{
            await BookModel.findByIdAndUpdate(bookID, payload)
            return res.send({msg : "Book updated"})
        }
})


bookRouter.delete("/delete/:bookID", async (req, res) => {
    const bookID = req.params.bookID

    const userID = req.userID
    const user = await UserModel.findOne({_id : userID})
    const user_email = user.email;

    const book = await BookModel.findOne({_id : bookID})
    const author_email = book.author_email

    console.log(user_email,author_email)
    if(user_email !== author_email){
        return res.send({msg : "You are not authorised to do this operation"})
    }
    else{
        await BookModel.findByIdAndDelete(bookID)
        return res.send({msg : "Book deleted"})
    }
})

module.exports = {bookRouter}