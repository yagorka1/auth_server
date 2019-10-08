const User = require('../models/user');
module.exports = {
    singUp: async (req, res, next) => {
        console.log('UsersController.signUp() called!');

        // const { email, password} = req.value.body; - эквивалент
        const email = req.value.body.email;
        const password = req.value.body.password;

        // Check if there is a user with the same email
        const foundUser = await User.findOne({ email });
        if(foundUser) {
            return res.status(403).json({ error: "Email is already exist" });
        }


        // Create new user
        const newUser = new User({ email, password });
        await newUser.save();

        //Response with token
        res.json( {user: 'created'} );
    },

    singIn: async (req, res, next) => {
        
    },

    secret: async (req, res, next) => {
        
    },
}