const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Product } = require("../models");
const { getOffset } = require("../helpers/controller");

module.exports = {
  findProduct: (req, res) => {
    const { page, limit } = req.query;
    const limited = limit ? limit : 8;
    const offset = page ? getOffset(page, limited) : 0;

    Product.findAndCountAll({ limit: limited, offset })
      .then(response => {
        res.json({ response, limit, offset });
      })
      .catch(err => {
        res.json({ err });
      });
  },

  findProductByCategory: (req, res) => {
    const { page, limit, CategoryId } = req.query;
    const limited = limit ? limit : 8;
    const offset = page ? getOffset(page, limited) : 0;

    Product.findAndCountAll({
      where: {
        CategoryId: {
          [Op.is]: CategoryId
        }
      },
      limit: limited,
      offset
    })
      .then(response => {
        res.json({ response, limit, offset });
      })
      .catch(err => {
        res.json({ err });
      });
  },

  findProductByName: (req, res) => {
    const { search } = req.body;

    Product.findAndCountAll({
      where: {
        name: {
          [Op.like]: `%${search}%`
        }
      }
    })
      .then(response => {
        res.json({ response });
      })
      .catch(err => {
        res.json({ err });
      });
  },

  findProductById: (req, res) => {
    const { id } = req.params;

    Product.findByPk(id)
      .then(response => {
        res.json({ response });
      })
      .catch(err => {
        res.json({ err });
      });
  },

  findProductById: (req, res) => {},

  createProduct: (req, res) => {
    const {
      name,
      description,
      qty,
      price,
      img,
      BranchId,
      categoryId
    } = req.body;

    Product.create({
      name,
      description,
      qty,
      price,
      img,
      BranchId,
      categoryId
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
