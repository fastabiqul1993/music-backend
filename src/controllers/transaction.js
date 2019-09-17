const { Transaction } = require("../models");
const { responses } = require("../helpers/helper");

module.exports = {
  findTransaction: (req, res) => {
    const { id } = req.params;

    Transaction.findAndCountAll({
      where: {
        UserId: id
      }
    })
      .then(response => {
        responses(res, response, 302);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  createTransaction: (req, res) => {
    const { UserId } = req.body;

    Transaction.create({
      UserId
    })
      .then(response => {
        responses(res, response, 201);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  }
};
