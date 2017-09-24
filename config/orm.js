var connection = require('./connection.js');

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
  selectAll: function(table, cb){
    var queryString = 'SELECT * FROM ' + table + ';';
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, col, val, cb){
    var queryString = 'INSERT INTO ' + table + ' (' + col + ') ' + 'VALUES (?)';
    connection.query(queryString, val, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(table, objColVals, condition, cb){
    var queryString = 'UPDATE ' + table + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;