const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  insert(phone) {
    return this.database.query(
      `insert into ${this.table} (brand, model, screen_size, network, antutu_indice, ram, storage, url) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        phone.brand,
        phone.model,
        phone.screenSize,
        phone.network,
        phone.antutuIndice,
        phone.ram,
        phone.storage,
        phone.url,
      ]
    );
  }

  update(phone) {
    return this.database.query(
      `update ${this.table} set brand = ?, model = ?, screen_size = ?, network = ?, antutu_indice = ?, ram = ?, storage = ?, url =? where idphone = ?`,
      [
        phone.brand,
        phone.model,
        phone.screenSize,
        phone.network,
        phone.antutuIndice,
        phone.ram,
        phone.storage,
        phone.url,
        phone.idphone,
      ]
    );
  }
}

module.exports = PhoneManager;
