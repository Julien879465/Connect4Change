const fs = require("fs");
const Papa = require("papaparse");

const readCSV = (req, res, next) => {
  try {
    const file = fs.createReadStream(req.file.path);
    const csvData = [];
    return Papa.parse(file, {
      header: true,
      download: true,
      step: (result) => {
        csvData.push(result.data);
      },
      complete: () => {
        req.body.data = csvData;

        next();
      },
    });
  } catch (e) {
    return res.sendStatus(500);
  }
};

module.exports = readCSV;
