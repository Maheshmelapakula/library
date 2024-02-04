const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    studentID:{
        type: String,
        required: true
        
    },
    department: {
        type: String,
        required: true

    },
    roles: { type: [String], default: [] },
    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {UserModel}