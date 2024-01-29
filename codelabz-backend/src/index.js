// app.js

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./route/userRoutes');
const courseRoutes = require('./route/courseRoutes');
const loginRoutes = require('./route/loginRoute');
const mongoDB = require("./config/mongoConfig")

// const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/user', userRoutes);
// app.use('/admin', adminRoutes);
app.use('/login', loginRoutes);
app.use('/course', courseRoutes);

mongoDB.connect()

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
