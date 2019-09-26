const cloudinary = require("cloudinary").v2;

function imgUpload(req, res, next) {
  const file = req.file.buffer.toString("base64");
  const uploadStr = "data:image/jpeg;base64," + file;

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

  cloudinary.uploader.upload(
    uploadStr,
    {
      overwrite: true,
      invalidate: true,
      width: 810,
      height: 456,
      crop: "fill"
    },
    (err, result) => {
      if (result) {
        req.body.img = result.url;
        next();
      } else if (err) {
        console.log(err);
      }
    }
  );
}

module.exports = imgUpload;
