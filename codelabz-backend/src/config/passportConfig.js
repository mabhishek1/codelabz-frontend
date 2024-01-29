// passport-config.js

const passport = require('passport');
const passportJWT = require('passport-jwt');
const { Strategy, ExtractJwt } = passportJWT;

// const User = require('./models/userModel'); // Replace with your user model

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'abc', // Replace with your secret key
};

passport.use(
  new Strategy(options, async (payload, done) => {
    try {
      const user = {
        userId : '123', 
        username : 'mabhishek'
      };
      console.log(user);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport;
