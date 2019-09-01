const { Product } = require("../models");

module.exports = {
  findProduct: (req, res) => {
    const { limit, offset } = req.query;

    Product.findAndCountAll({ limit, offset })
      .then(response => {
        res.json({ response });
      })
      .catch(err => {
        res.json({ err });
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
