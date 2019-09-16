const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Product, Branch, Category } = require("../models");
const { getOffset, responses } = require("../helpers/helper");

module.exports = {
  findProduct: (req, res) => {
    const { page, limit, order, search, CategoryId } = req.query;
    const limited = limit ? limit : 4;
    const offset = page ? getOffset(page, limited) : 0;
    const orderBy = order ? order : "DESC";

    Product.findAndCountAll({
      limit: limited,
      offset,
      order: [["createdAt", orderBy]],
      where: {
        [Op.or]: [{ name: { [Op.like]: `%${search}%` } }, { CategoryId }]
      },
      include: [{ model: Branch }, { model: Category }]
    })
      .then(response => {
        responses(res, response, 302);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  findProductById: (req, res) => {
    const { id } = req.params;

    Product.findOne({
      where: { id },
      include: [{ model: Branch }, { model: Category }]
    })
      .then(response => {
        responses(res, response, 302);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  createProduct: (req, res) => {
    const {
      name,
      description,
      qty,
      price,
      img,
      BranchId,
      CategoryId
    } = req.body;

    Product.create({
      name,
      description,
      qty,
      price,
      img,
      BranchId,
      CategoryId
    })
      .then(response => {
        responses(res, response, 201);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  patchProduct: (req, res) => {
    const { BranchId, qty, price } = req.body;
    const { id } = req.params;

    Product.update(
      {
        BranchId,
        qty,
        price
      },
      { where: { id } }
    )
      .then(response => {
        responses(res, response, 301);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  deleteProduct: (req, res) => {
    const { id } = req.params;

    Product.destroy({
      where: { id }
    })
      .then(response => {
        responses(res, response, 202);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  }
};
