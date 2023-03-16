const AbstractManager = require("./AbstractManager");
// const csv = require("fast-csv");
// const fs = require("fs");

class FileManager extends AbstractManager {
  constructor() {
    super({ table: "file" });
  }

  insert(file) {
    const { name, filename } = file;
    return this.database.query(
      `insert into ${this.table} (name, filename) values (?, ?)`,
      [name, filename]
    );
  }

  // uploadCsv(uriFile) {
  //   let stream = fs.createReadStream(uriFile);
  //   let csvDataColl = [];
  //   let fileStream = csv
  //     .parse()
  //     .on("data", function (data) {
  //       csvDataColl.push(data);
  //     })
  //     .on("end", function () {
  //       csvDataColl.shift();

  //       this.database.connect((error) => {
  //         if (error) {
  //           console.error(error);
  //         } else {
  //           let query = "INSERT INTO users (id, name, email) VALUES ?";
  //           this.database.query(query, [csvDataColl], (error, res) => {
  //             console.log(error || res);
  //           });
  //         }
  //       });

  //       fs.unlinkSync(uriFile);
  //     });

  //   stream.pipe(fileStream);
  // }
}
module.exports = FileManager;

// requete d'insert dans les manager

// middleware ap upload

// stocker nom du fichier à modifier à lire
