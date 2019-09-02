const { Branch } = require("../models");

module.exports = {
  findBranch: (req, res) => {
    const { limit, offset } = req.query;

    Branch.findAndCountAll({ limit, offset })
      .then(response => {
        res.json({ response });
      })
      .catch(err => {
        res.json({ err });
      });
  }
};
