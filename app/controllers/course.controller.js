const Sequelize = require('sequelize');
const db = require("../models");
const Course = db.Course;


// Retrieve all Courses from the database
exports.findAll = (req, res) => {
    Course.findAll()
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving course_listings.",
            });
        });
};

exports.create = async (req, res) => {
  console.log(req.data);
    Course.create(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the course.",
            });
        });

};


exports.update = (req, res) => {
    const id = req.params.id;
    Course.update(req.body, {
        where: { courseid: id },
    })
    .then((num) => {
        if (num == 1) {
          res.send({
            message: "Course was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Course with id=${id}. Maybe Course was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error updating Course with id=" + id,
        });
      });
  };

// Delete a Course by an ID from the database
exports.delete = (req, res) => {
    const id = req.params.id;
    Course.destroy({
        where: { courseid: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Course was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Course with id=${id}. Maybe Course was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Could not delete Course with id=" + id,
            });
        });
};
