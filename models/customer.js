module.exports = function(sequelize, DataTypes){
  var Customer = sequelize.define('Customer', {
    customer_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  return Customer;
}