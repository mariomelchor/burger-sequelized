var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  create: function(col, val, cb) {
    orm.insertOne('burgers', col, val, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;