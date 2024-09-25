// ./app/routes/course.routes.js
module.exports = app => {
  const courses = require("../controllers/course.controller.js");

  var router = require("express").Router();

  // Retrieve all Courses
  router.get("/", courses.findAll);

  app.use("/api/courses", router);
};
