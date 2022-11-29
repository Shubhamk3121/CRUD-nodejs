const multer = require("multer");
const constant = require("../constants/constant.json")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,constant.storePath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({
  storage: storage
});

module.exports = upload;



  // limits: {
  //   fileSize: 1024 * 1024 * 5,
  // },
  // fileFilter: function (req, file, callback) {
  //   if (
  //     file.mimetype == "image/png" ||
  //     file.mimetype == "image/jpeg" ||
  //     file.mimetype == "image/jpg"
  //   ) {
  //     callback(null, true);
  //   } else {
  //     console.log("only jpg,jpeg,png filess supported");
  //   }
  // },