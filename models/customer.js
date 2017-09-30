module.exports = function(sequelize, DataTypes){
  var Customer = sequelize.define('Customer', {
    customer_name: DataTypes.STRING
  });

  Customer.associate = function(models) {
    Customer.belongsTo(models.Burger, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Customer;
}