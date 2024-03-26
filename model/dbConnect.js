const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,  // If errors in your code will overwrite
    });

sequelize
    .authenticate()
    .then(() => {
        console.log("Database Connection Successful...");
    })
    .catch((err) => {
        console.log("Error" + err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Student = require("./studentModel.js")(sequelize, DataTypes);
db.Course = require("./courseModel.js")(sequelize, DataTypes);
db.reg = require("./regModel.js")(sequelize, DataTypes);

db.sequelize.sync({force: false})
.then(()=>{
    console.log('re-sync done')
})

module.exports = db;