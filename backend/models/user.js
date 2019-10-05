'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.INTEGER,
    sexo: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    rol: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};