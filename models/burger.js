module.exports = function(sequelize, DataTypes){
  var Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    }
  });
  return Burger;
}
// Sample Validation
// burger_name: {
//   type: DataTypes.STRING,
//   validate: {
//     notEmpty: true,
//   }
// },