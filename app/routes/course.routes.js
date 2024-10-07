
var express = require("express");
var router = express.Router();

const courses = require("../controllers/course.controller.js");

// Retrieve all Courses
router.get("/", courses.findAll);

router.delete("/:id", courses.delete);

router.use("/api/courses", courses.create);
  
router.post("/api/courses", courses.create);
  
module.exports = router;
