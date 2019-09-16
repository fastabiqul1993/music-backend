const jwt = require("jsonwebtoken");

const { User } = require("../models");
const { responses } = require("../helpers/helper");

module.exports = {
  login: (req, res) => {
    const { email, password } = req.body;
    User.findOne({ where: { email } })
      .then(response => {
        if (!response) {
          responses(res, response, 404);
        } else if (password !== response.password) {
          const msg = "email or password not match";

          responses(res, msg, 403);
        } else if (password === response.password) {
          const { id, name, role } = response;
          const token = jwt.sign({ id, name, role }, process.env.SECRET_KEY, {
            expiresIn: "24h"
          });

          responses(res, token, 302);
        }
      })
      .catch(err => {
        responses(res, err, 400);
      });
  }
};
