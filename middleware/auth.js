const jwt = require("jsonwebtoken");

module.exports = {
  isAuth: (req, res, next) => {
    const headerAuth = req.headers["authorization"];
    const headerSecret = req.headers[""];
  }
};
