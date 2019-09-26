const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Cart, Product } = require("../models");
const { responses } = require("../helpers/helper");

module.exports = {
  findCart: (req, res) => {
    const { id } = req.params;

    Cart.findAndCountAll({
      where: { UserId: id },
      include: [{ model: Product }]
    })
      .then(response => {
        responses(res, response, 202);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  addToCart: (req, res) => {
    const { UserId, ProductId } = req.body;

    Cart.create({ UserId, ProductId, qty: 1 })
      .then(response => {
        responses(res, response, 201);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  patchCart: (req, res) => {
    const { UserId, ProductId, qty } = req.body;

    Cart.update(
      { qty },
      {
        where: { UserId, [Op.and]: { ProductId } }
      }
    )
      .then(response => {
        responses(res, response, 201);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  deleteFromCart: (req, res) => {
    const { UserId, ProductId } = req.body;

    Cart.destroy({
      where: { [Op.and]: [{ UserId, ProductId }] }
    })
      .then(response => {
        responses(res, response, 202);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  }
};
