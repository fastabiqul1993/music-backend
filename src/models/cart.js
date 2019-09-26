"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      UserId: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
    },
    {}
  );
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.User);
    Cart.belongsTo(models.Product);
  };
  return Cart;
};
