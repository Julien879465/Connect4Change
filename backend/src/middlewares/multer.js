const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// const MIME_TYPES = {
//   "text/csv": "csv",
// };

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: (req, file, callBack) => {
    // ici on pourrait check le mimetype
    const name = file.originalname.split(" ").join("_");
    // const extension = MIME_TYPES[file.mymetype];
    callBack(null, `${name}-${uuidv4()}.csv`);
  },
});

module.exports = multer({ storage }).single("file");
