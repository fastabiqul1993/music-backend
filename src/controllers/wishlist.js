const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Wishlist, User, Product } = require("../models");
const { responses } = require("../helpers/helper");

module.exports = {
  findWishlist: (req, res) => {
    const { id } = req.params;

    Wishlist.findAndCountAll({
      where: { UserId: id },
      include: [{ model: Product }]
    })
      .then(response => {
        responses(res, response, 302);
      })
      .catch(err => {
        response(res, null, 400, err);
      });
  },

  addToWishlist: (req, res) => {
    const { UserId, ProductId } = req.body;

    Wishlist.create({ UserId, ProductId })
      .then(response => {
        responses(res, response, 201);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  deleteFromWishlist: (req, res) => {
    const { UserId, ProductId } = req.body;

    Wishlist.destroy({
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
