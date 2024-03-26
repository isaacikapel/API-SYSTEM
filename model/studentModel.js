module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('student', {
      student_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      firstName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      lastName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      gender: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  });
  
  return Student;
};