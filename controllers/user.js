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
          responses(res, response, 404);
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

              responses(res, result, 302);
            }
          });
        }
      })
      .catch(err => {
        responses(res, err, 400);
      });
  },
  register: (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
      User.create({ name, email, password: hash, role: "user" })
        .then(response => {
          responses(res, response, 201);
        })
        .catch(err => {
          responses(res, err, 400);
        });
    });
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

    // User.create({ name, email, password: passwordHash, role: "admin" })
    //   .then(response => {
    //     responses(res, response, 201);
    //   })
    //   .catch(err => {
    //     responses(res, err, 400);
    //   });
  }
};
