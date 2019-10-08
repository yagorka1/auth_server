const  User = require('./models/user');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { JWT_SECRET } = require('./configuration');
const localStrategy = require('passport-local').Strategy;

// JSON WEB TOKEN STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET,
}, async (payload, done) => {
    try {
        // find the user specified in token
        const user = await User.findById(payload.sub);

        // if user doesn't exists, handle it
        if(!user) {
            return done(null, false);
        }

        // Otherwise, return the user
        done(null, user);
    } catch(error) {
        done(error, false);
    }
}));

// LOCAL STRATEGY 
passport.use(new localStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    //Find user given the email
    const user = await User.findOne({ email });

    // if not, handle it
    if(!user) {
        return done(null, false);
    }
    
    // Check if the password is correct

    // If not, handle it

    // Otherwise, return the user
}));