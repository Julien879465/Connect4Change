const AbstractManager = require("./AbstractManager");
// const csv = require("fast-csv");
// const fs = require("fs");

class FileManager extends AbstractManager {
  constructor() {
    super({ table: "file" });
  }

  insert(file) {
    const { name, filename, data } = file;
    return this.database.query(
      `insert into ${this.table} (name, filename, data) values (?, ?, ?)`,
      [name, filename, data]
    );
  }
}
module.exports = FileManager;
