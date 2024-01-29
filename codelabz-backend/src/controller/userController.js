// controllers/userController.js

const userService = require('../service/userService');

function createUser(req, res) {
  // Handle logic to create a user using userService
  const newUser = userService.createUser(req.body);

//   // Return response
//   res.json({ user: newUser });
}


module.exports = {
  createUser
};
