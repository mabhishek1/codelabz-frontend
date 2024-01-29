// controllers/userController.js


const Course = require('../model/Course');
const courseService = require('../service/courseService');


function createCourse(req, res) {
  // Handle logic to create a user using userService
  
  const newCourse = new Course({
    id: 'unique_course_id_123111', // Provide a unique identifier
    title: 'Introduction to Node.js',
    description: 'Learn the basics of Node.js programming.',
    instructor: 'John Doe',
    price: 29.99,
    duration: 4,
    level: 'Intermediate',
    tags: ['Node.js', 'Programming'],
    startDate: new Date('2024-01-15'),
    lastEnrollDate: new Date('2024-01-10'),
    picture: 'https://example.com/nodejs-course.jpg',
    participants: 0,
  });
  const course = courseService.createCourse(newCourse)
  res.send(JSON.stringify(course));

//   // Return response
//   res.json({ user: newUser });
}

function getCourseById(req,res) {
  courseService.getCourse(req.query.id).then((course)=>{
    console.log(course);
    res.send(JSON.stringify(course));
  })
  // console.log(course);

  
}

module.exports = {
  createCourse,
  getCourseById
};
