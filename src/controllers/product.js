const Sequelize = require("sequelize");
const Op = Sequelize.Op;
// const cloudinary = require("cloudinary").v2;

const { Product, Branch, Category } = require("../models");
const { getOffset, responses } = require("../helpers/helper");
const imgUpload = require("../middleware/upload");

module.exports = {
  findProduct: (req, res) => {
    const { page, limit, order, search, CategoryId } = req.query;
    const limited = limit ? limit : 20;
    const offset = page ? getOffset(page, limited) : 0;
    const orderBy = order ? order : "DESC";

    Product.findAndCountAll({
      limit: limited,
      offset,
      order: [["createdAt", orderBy]],
      where: {
        [Op.or]: [{ name: { [Op.like]: `%${search}%` } }, { CategoryId }]
      },
      include: [{ model: Branch }, { model: Category }]
    })
      .then(response => {
        responses(res, response, 200);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  findForSearch: (req, res) => {
    Product.findAll({ attributes: ["id", "name"] })
      .then(response => {
        responses(res, response, 200);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  findProductById: (req, res) => {
    const { id } = req.params;

    Product.findOne({
      where: { id },
      include: [{ model: Branch }, { model: Category }]
    })
      .then(response => {
        responses(res, response, 200);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  createProduct: (req, res) => {
    const {
      name,
      description,
      qty,
      price,
      img,
      BranchId,
      CategoryId
    } = req.body;

    Product.create({
      name,
      description,
      qty,
      price,
      img,
      BranchId,
      CategoryId
    })
      .then(response => {
        responses(res, response, 201);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  patchProduct: (req, res) => {
    const {
      name,
      description,
      img,
      qty,
      price,
      BranchId,
      CategoryId
    } = req.body;
    const { id } = req.params;

    Product.update(
      {
        name,
        description,
        img,
        qty,
        price,
        BranchId,
        CategoryId
      },
      { where: { id } }
    )
      .then(response => {
        const result = {
          id,
          name,
          description,
          img,
          qty,
          price,
          BranchId,
          CategoryId
        };
        responses(res, result, 200);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  },

  deleteProduct: (req, res) => {
    const { id } = req.params;

    Product.destroy({
      where: { id }
    })
      .then(response => {
        response.id = id;
        responses(res, response, 200);
      })
      .catch(err => {
        responses(res, null, 400, err);
      });
  }

  // imageUpload: async (req, res) => {
  //   const file = await req.file.buffer.toString("base64");
  //   const uploadStr = "data:image/jpeg;base64," + file;

  //   cloudinary.config({
  //     cloud_name: process.env.CLOUD_NAME,
  //     api_key: process.env.API_KEY,
  //     api_secret: process.env.API_SECRET
  //   });

  //   cloudinary.uploader.upload(
  //     uploadStr,
  //     {
  //       overwrite: true,
  //       invalidate: true,
  //       width: 810,
  //       height: 456,
  //       crop: "fill"
  //     },
  //     (err, result) => {
  //       if (result) {
  //         responses(res, result, 201);
  //       } else if (err) {
  //         responses(res, null, 400, err);
  //       }
  //     }
  //   );
  // }
};
