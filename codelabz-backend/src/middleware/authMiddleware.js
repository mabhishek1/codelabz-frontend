// middleware/authMiddleware.js

const passport = require('../config/passportConfig');

function authenticate(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    console.log(user);
    if (err || !user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = user;
    return next();
  })(req, res, next);
}

module.exports = authenticate;
