const JWT= require('jsonwebtoken'); 
const User = require('../models/user');
const { JWT_SECRET } = require('../configuration');

const signToken = (user) => {
    return JWT.sign({
        iss: 'CodeWorkr',
        sub: user._id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, JWT_SECRET);
}


module.exports = {
    singUp: async (req, res, next) => {
        console.log('UsersController.signUp() called!');

        const { email, password} = req.value.body; // эквивалент
        // const email = req.value.body.email;
        // const password = req.value.body.password;

        // Check if there is a user with the same email
        const foundUser = await User.findOne({ email });
        if(foundUser) {
            return res.status(403).json({ error: "Email is already exist" });
        }


        // Create new user
        const newUser = new User({ email, password });
        await newUser.save();

        // Generate the token
        const token = signToken(newUser);

        //Response with token
        res.status(200).json({ token })
    },

    singIn: async (req, res, next) => {
        // Generate token
    },

    secret: async (req, res, next) => {
        console.log('I\'m here');
        res.json({ secret: "resource" });
    },
}