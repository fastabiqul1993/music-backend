"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      UserId: DataTypes.INTEGER
    },
    {}
  );
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.User);
    Transaction.hasMany(models.Product);
  };
  return Transaction;
};
