var db = require('../models');

module.exports = function(app) {
  // Get Route
  app.get('/', function (req, res) {
    db.Burger.findAll({ 
      order: [['burger_name', 'ASC']] 
    }).then(function(result) {
      var obj = {
        burger: result
      };
      res.render('index', obj);
    });
  });

  // Post Route
  app.post('/', function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger
    }).then(function(burger) {
      res.redirect("/");
    });
  });

  // Update route
  app.put("/", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: {
          $eq: req.body.id
        }
      }
    }).then(function(burger) {
      res.redirect("/");
    });
  });
};