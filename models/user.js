const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const usersSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// create a model
const User = mongoose.model('user', usersSchema);

module.exports = User;