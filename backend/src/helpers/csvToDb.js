// const csv = require("fast-csv");
// const fs = require("fs");

// function uploadCsv(uriFile) {
//   let stream = fs.createReadStream(uriFile);
//   let csvDataColl = [];
//   let fileStream = csv
//     .parse()
//     .on("data", function (data) {
//       csvDataColl.push(data);
//     })
//     .on("end", function () {
//       csvDataColl.shift();

//       database.connect((error) => {
//         if (error) {
//           console.error(error);
//         } else {
//           let query = "INSERT INTO users (id, name, email) VALUES ?";
//           database.query(query, [csvDataColl], (error, res) => {
//             console.log(error || res);
//           });
//         }
//       });

//       fs.unlinkSync(uriFile);
//     });

//   stream.pipe(fileStream);
// }

// module.exports = uploadCsv;
