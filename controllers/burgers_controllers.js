var db = require('../models');

module.exports = function(app) {
  // Get Route
  app.get('/', function (req, res) {
    db.Burger.findAll({ 
      order: [['burger_name', 'ASC']],
      include: [db.Customer]
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

    db.Customer.create({
      customer_name: req.body.customer_name,
      BurgerId: req.body.id
    });

    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(burger) {
      res.redirect("/");
    });
  });
};