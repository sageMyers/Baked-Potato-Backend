module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    courseID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dept: {
      type: Sequelize.STRING,
    },
    courseNumber: {
      type: Sequelize.BOOLEAN,
    },
    courseLevel: {
      type: Sequelize.INTEGER,
    },
    courseHours: {
      type: Sequelize.INTEGER,
    },
    courseName: {
      type: Sequelize.STRING,
    },
    courseDescription: {
      type: Sequelize.STRING,
    },

  }
  ,{timestamps: false}
);
  return Course;
};
