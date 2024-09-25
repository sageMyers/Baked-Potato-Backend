// ./app/controllers/course.controller.js
const Sequelize = require('sequelize');





const db = require("../models");
//const Course = db.Course;

const Course = db.Course;
const Op = db.Sequelize.Op;




// Retrieve all Courses from the database
exports.findAll = (req, res) => {
    Course.findAll()
      .then((data) => {
        console.log(data)
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving course_listings.",
        });
      });
  };
 

