// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // add code to send the view.html file
  app.get("/", function(req, res) {

  });

  // add code to send the add.html page, where users can enter new books to the db
  app.get("/add", function(req, res) {

  });

  // add code to send the all.html page, where all books in the db are displayed
  app.get("/all", function(req, res) {

  });

  // add code to send the short.html page, where short books in the db are displayed
  app.get("/short", function(req, res) {

  });

  // add code to send the long.html page, where long books in the db are displayed
  app.get("/long", function(req, res) {

  });

};
