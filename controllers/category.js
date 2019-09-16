const { Category } = require("../models");

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
  }
};
