
const express = require('express');
const courseController = require('../controller/courseController');

const router = express.Router();

router.post('/create', courseController.createCourse);
router.get("/",courseController.getCourseById)

module.exports = router;
