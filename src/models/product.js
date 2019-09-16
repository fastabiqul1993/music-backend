"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      qty: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      img: DataTypes.STRING,
      BranchId: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER
    },
    {}
  );
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Branch);
    Product.belongsTo(models.Category);
    Product.hasMany(models.Wishlist);
    Product.hasMany(models.Cart);
  };
  return Product;
};
