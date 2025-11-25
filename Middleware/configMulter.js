const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, "./storage"); //folder name where files are stored
  },
  filename: function (req, files, cb) {
    cb(null, "kmla-" + files.originalname); //custom file name
  },
});
module.exports = { storage, multer };
