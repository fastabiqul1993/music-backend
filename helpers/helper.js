module.exports = {
  getOffset: (page, limit) => {
    return (Number(page) - 1) * limit;
  },
  responses: (res, result, status, error) => {
    let resPrint = {};

    if (result.count <= 1) {
      status = 404;
      result = "Not Found";
    }
    console.log(result);

    resPrint.status = status || 200;
    resPrint.response = result;
    resPrint.error = error;

    return res.status(resPrint.status).json(resPrint);
  }
};
