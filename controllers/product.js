const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Product, Branch, Category } = require("../models");
const { getOffset } = require("../helpers/controller");

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
        res.json({ response, limit, offset });
      })
      .catch(err => {
        res.json({ err });
      });
  },

  findProductById: (req, res) => {
    const { id } = req.params;

    Product.findOne({
      where: { id },
      include: [{ model: Branch }, { model: Category }]
    })
      .then(response => {
        res.json({ response });
      })
      .catch(err => {
        res.json({ err });
      });
  },

  //   CategoryId: "1"
  // branch: "3"

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
        res.json({ response });
      })
      .catch(err => {
        res.json({ err });
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
        res.json({ response });
      })
      .catch(err => {
        res.json({ err });
      });
  },

  deleteProduct: (req, res) => {
    const { id } = req.params;

    Product.destroy({
      where: { id }
    })
      .then(response => {
        res.json({ response });
      })
      .catch(err => {
        res.json({ err });
      });
  }
};
