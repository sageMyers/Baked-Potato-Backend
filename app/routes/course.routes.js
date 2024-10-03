// ./app/routes/course.routes.js
module.exports = app => {
  const courses = require("../controllers/course.controller.js");

  var router = require("express").Router();

  // Retrieve all Courses
  router.get("/", courses.findAll);

  router.delete("/:id", courses.delete);
  
  router.put("/:id", courses.update);

  app.use("/api/courses", router);
  
  app.post("/api/courses", courses.create);
};
