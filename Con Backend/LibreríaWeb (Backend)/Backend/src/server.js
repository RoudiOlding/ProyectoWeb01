const express = require("express");
const servConfig = require("./config/server-config.js");
const administratorRouter  = require("./routes/administrator.routes.js");
const studentRouter  = require("./routes/student.routes.js");
const bookRouter = require ("./routes/book.routes.js");
const bookingRouter =require("./routes/booking.routes.js");
const favoriteRouter = require("./routes/favorite.routes.js")
const { routesAdministrator } = require("./LoadData/administrator.load.js");
const { routesStudent } = require("./LoadData/student.load.js");
const { routesBooking } = require("./LoadData/booking.load.js");
const { routesFavorite } = require("./LoadData/favorite.load.js");


const loadData = require("./setter/loadData.js");
const server = () =>{
  const app = express();
  app.use(servConfig);
  app.use(administratorRouter);
  app.use(studentRouter);
  app.use(bookRouter);
  app.use(bookingRouter);
  app.use(favoriteRouter);

  app.use(routesAdministrator);
  app.use(routesStudent);
  app.use(routesBooking);
  app.use(routesFavorite);

  const port = process.env.PORT || 3001

  const run = (port) => {
    app.listen(port);
    console.log('Servidor iniciado. Escuchando en puerto' + port)
  };
  const { db } = require("./db");
  db.sequelize
    .sync({ force: false })
    
    .then(() =>{
        loadData();
      })
    
    .catch((err) => {
      console.log("Failed to sync db: " + err.message);
    });
  return {
      app,
      run,
    };
  };
module.exports = server;