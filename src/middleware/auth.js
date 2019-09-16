const jwt = require("jsonwebtoken");
const { responses } = require("../helpers/helper");

module.exports = {
  isAuth: (req, res, next) => {
    const { header_key } = req.headers;

    if (header_key !== process.env.HEADER_KEY) {
      return responses(res, null, 401, "Unauthorized, need authentication!");
    } else {
      next();
    }
  },

  isAdmin: (req, res, next) => {
    const secret_key = process.env.SECRET_KEY;
    const user_token = req.headers["access_token"];

    jwt.verify(user_token, secret_key, (err, decoded) => {
      if (err && err.name === "TokenExpiredError") {
        responses(res, null, 401, "Token expired");
      } else if (err && err.name === "JsonWebTokenError") {
        responses(res, null, 401, "Invalid token");
      } else if (decoded.role !== "admin") {
        responses(res, null, 401, "Not authorized! only for Administrator");
      }
      console.log("Access granted!");
      next();
    });
  },

  isUser: (req, res, next) => {
    const secret_key = process.env.SECRET_KEY;
    const user_token = req.headers["access_token"];

    jwt.verify(user_token, secret_key, (err, decoded) => {
      console.log(decoded);
      if (err && err.name === "TokenExpiredError") {
        return responses(res, null, 401, "Token expired");
      } else if (err && err.name === "JsonWebTokenError") {
        return responses(res, null, 401, "Invalid token");
      }
      console.log("Access granted!");
      next();
    });
  }
};
