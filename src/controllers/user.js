const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const { User } = require("../models");
const { responses } = require("../helpers/helper");

module.exports = {
  login: (req, res) => {
    const { email, password } = req.body;

    User.findOne({ where: { email } })
      .then(response => {
        if (!response) {
          responses(res, null, 404, "Something went wrong");
        } else {
          bcrypt.compare(password, response.password, (err, isCompare) => {
            if (!isCompare) {
              responses(res, null, 401, "email or password not match!");
            } else {
              const { id, name, role } = response;
              const access_token = jwt.sign(
                {
                  id,
                  name,
                  role
                },
                process.env.SECRET_KEY,
                {
                  expiresIn: "24h"
                }
              );

              const result = { id, name, role, access_token };

              responses(res, result, 201);
            }
          });
        }
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },
  register: (req, res) => {
    const { name, email, password } = req.body;

    if (password) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        User.create({ name, email, password: hash, role: "user" })
          .then(response => {
            responses(res, response, 201);
          })
          .catch(err => {
            responses(res, null, 400, err);
          });
      });
    } else {
      responses(res, null, 400, "Something went wrong");
    }
  },
  registerAdmin: (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
      User.create({ name, email, password: hash, role: "admin" })
        .then(response => {
          responses(res, response, 201);
        })
        .catch(err => {
          responses(res, err, 400);
        });
    });
  }
};
