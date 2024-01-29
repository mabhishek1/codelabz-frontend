const mongoose = require('mongoose');



const courseSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    instructor: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true
    },
    tags: {
      type: [String],
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    lastEnrollDate: {
      type: Date,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    participants: {
      type: Number,
      default: 0
    },
    // Add more fields as needed
  });
  
// Create a Mongoose model based on the schema
const Course = mongoose.model('Course', courseSchema);

// Export the Course model
module.exports = Course;
