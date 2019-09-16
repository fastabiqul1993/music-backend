const { Category } = require("../models");
const { responses } = require("../helpers/helper");
module.exports = {
  findCategory: (req, res) => {
    const { limit, offset } = req.query;

    Category.findAndCountAll({ limit, offset })
      .then(response => {
        res.json({ response });
      })
      .catch(err => {
        res.json({ err });
      });
  },
  createCategory: (req, res) => {
    const { name, img } = req.body;
    Category.create({ name, img })
      .then(response => {
        responses(res, response, 201);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },
  patchCategory: (req, res) => {
    const { name, img } = req.body;
    const { id } = req.params;

    Category.update(
      {
        name,
        img
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
  deleteCategory: (req, res) => {
    const { id } = req.params;

    Category.destroy({
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
