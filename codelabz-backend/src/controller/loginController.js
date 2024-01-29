// controllers/userController.js

const jsonwebtoken = require('jsonwebtoken')
const loginService = require('../service/loginService');

function login(req, res) {
    console.log(req.body);
  // Handle logic to create a user using userService
  const newUser = loginService.login(req.body);
  if (newUser) {
    const token = jsonwebtoken.sign({userId : '123', username : 'mabhishek'},'abc',{
        expiresIn : '1h'
    })
    console.log(token);
    res.json({token})
    // console.log(res);
  }
//   return token;
}


module.exports = {
  login
};
