const client = require("../config/mongoConfig");
const Course = require("../model/Course");

function createCourse(course) {
    try {
        Course.create(course)
        .then(res =>{
          return res.toJSON()
        });
        
      } catch (error) {
        console.error('Error saving course:', error);
        throw error;
      }
}

async function getCourse(id) {
  try {
    const course = await Course.findById(id);
    // console.log(course);
    if (!course) {
      console.log("CNF");;
    }
    return course

    
  } catch (error) {
    console.error('Error finding course:', error);
    throw error;
  }
}

function getAllCourse() {
    return Course.find().then(res =>{
      console.log(res);
    })
}

function getCourseByFilter(params) {
    
}


module.exports = {
    createCourse,
    getCourse,
    getAllCourse,
    getCourseByFilter
}