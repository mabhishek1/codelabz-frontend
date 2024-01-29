const uri = "mongodb+srv://mabhishek629:Satragachi%40123@cluster0.cyvfohk.mongodb.net/CodeLabz";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const { MongoClient } = require('mongodb');
const { default: mongoose } = require('mongoose');



// Database Name
const dbName = 'CodeLabz';

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Connect to the server
mongoose
 .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true})   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

module.exports = client;
