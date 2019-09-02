module.exports = {
  getOffset: (page, limit) => {
    return (Number(page) - 1) * limit;
  }
};
