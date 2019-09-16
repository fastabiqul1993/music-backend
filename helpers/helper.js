module.exports = {
  getOffset: (page, limit) => {
    return (Number(page) - 1) * limit;
  },
  responses: (res, result, status, error) => {
    let resPrint = {};

    resPrint.status = status || 200;
    resPrint.response = result;
    resPrint.error = error;

    return res.status(resPrint.status).json(resPrint);
  }
};
