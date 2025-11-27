const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, "./storage"); //folder name where files are stored
  },
  filename: function (req, files, cb) {
    cb(null, Date.now() + files.originalname); //custom file nameMiddleware/configMulter.js
  },
});
module.exports = { storage, multer };
