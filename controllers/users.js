module.exports = {
    singUp: async (req, res, next) => {
       // Email & Password
    // req.value.body
    console.log('contents of req.value.body', req.value.body);
    console.log('UsersController.signUp() called!');
    },

    singIn: async (req, res, next) => {
        console.log('UserController.singIp() called')
    },

    secret: async (req, res, next) => {
        console.log('UserController.secret() called')
    },
}