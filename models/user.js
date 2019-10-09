const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

usersSchema.pre('save', async function(next) {
    try {
        // Generate a salt 
        const salt = await bcrypt.genSalt(10);
        // Generate a password hash (salt + hash)
        const passwordHash = await bcrypt.hash(this.password, salt);
        // Re assign hashed version over original, plain text password
        this.password = passwordHash;
        next();
    } catch(error) {
        next(error);
    }
});

usersSchema.methods.isValidPassword = async function(newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.password);
    } catch(error) {
        throw new Error(error);
    }
}

// create a model
const User = mongoose.model('user', usersSchema);

module.exports = User;