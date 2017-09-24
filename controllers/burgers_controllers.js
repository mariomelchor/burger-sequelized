var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

// Get Route
router.get('/', function (req, res) {
  burger.all(function(data) {
    var obj = {
      burger: data
    };

    res.render("index", obj);
  });
});

// Post Route
router.post('/', function(req, res) {
  burger.create('burger_name', [req.body.burger], function() {
    res.redirect("/");
  });
});

// Update route
router.put("/", function(req, res) {
  var condition = "id = " + req.body.id;
  burger.update( { devoured: req.body.devoured }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;