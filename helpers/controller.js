module.exports = {
  getOffset: (page, limit) => {
    return (Number(page) - 1) * limit;
  },
  getResponse: (res, result, status, error) => {
    let resPrint = {};

    resPrint.status = status || 200;
    resPrint.result = result;
    resPrint.error = error;

    return res.status(resPrint.status).json(resPrint);
  }
};
