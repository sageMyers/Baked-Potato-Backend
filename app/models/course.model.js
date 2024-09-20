module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    courseID: {
      type: Sequelize.STRING,
    },
    dept: {
      type: Sequelize.STRING,
    },
    courseNumber: {
      type: Sequelize.BOOLEAN,
    },
    courseLevel: {
      type: Sequelize.INT,
    },
    courseHours: {
      type: Sequelize.INT,
    },
    courseName: {
      type: Sequelize.STRING,
    },
    courseDescription: {
      type: Sequelize.STRING,
    },
  });
  return Course;
};
