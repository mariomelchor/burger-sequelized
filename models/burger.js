module.exports = function(sequelize, DataTypes){
  var Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    }
  });

  Burger.associate = function(models) {
    Burger.hasOne(models.Customer, {
      onDelete: "cascade"
    });
  };

  return Burger;
}