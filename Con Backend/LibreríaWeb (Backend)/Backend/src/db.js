const dbConfig = require("./config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.DBPORT,
  dialect: dbConfig.DIALECT,
  operatorsAliases: false,
  pool: {
    max: 1000,
    min: 0,
    acquire: 20000,
    idle: 5000,
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Storing models
const Models = {};
const Administrator = require("./models/administrator.model.js")(sequelize, Sequelize);
const Book = require("./models/book.model.js")(sequelize, Sequelize);
const Booking = require("./models/booking.model.js")(sequelize, Sequelize);
const Favorite = require("./models/favorite.model.js")(sequelize, Sequelize);
const Student = require("./models/student.model.js")(sequelize, Sequelize);

//Associations
 

Student.hasMany(Booking);
Book.hasMany(Booking);  

Student.hasMany(Favorite);
Book.hasMany(Favorite); 

//Modelos
Models.Administrator=Administrator;
Models.Book=Book;
Models.Booking=Booking;
Models.Favorite=Favorite;
Models.Student=Student;

// Procedimientos almacenados

module.exports = { db, Models,sequelize };
