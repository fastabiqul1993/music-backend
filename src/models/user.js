"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true }
      },
      password: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Wishlist);
    User.hasMany(models.Cart);
    User.hasMany(models.Transaction);
  };
  return User;
};
