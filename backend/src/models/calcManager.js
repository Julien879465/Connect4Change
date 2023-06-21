const AbstractManager = require("./AbstractManager");

class CalcManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  getInfo() {
    return this.database.query(
      `select phone.idphone, brand, model, screen_size, network, antutu_indice, ram, storage, url, total.total, total.ram_value, total.storage_value, total.antutu_value, total.total_weighted, total.category_name, state.name, state.weighting from ${this.table} JOIN state ON phone.idphone = state.phone_idphone JOIN total ON phone.idphone = total.phone_idphone `
    );
  }

  getInfoById(idphone) {
    return this.database.query(
      `select phone.idphone, brand, model, screen_size, network, antutu_indice, ram, storage, url, total.total, total.ram_value, total.storage_value, total.antutu_value, total.total_weighted, total.category_name, state.name, state.weighting from ${this.table} JOIN state ON phone.idphone = state.phone_idphone JOIN total ON phone.idphone = total.phone_idphone WHERE phone.idphone= ? `,
      [idphone]
    );
  }

  insert() {
    return this.database.query(
      `INSERT INTO total (total.total, total.ram_value, total.storage_value, total.antutu_value, total.total_weighted, total.category_name, state.name, state.weighting),
        SELECT idphone, state.phone_idphone, total.phone_idphone FROM phone,
        JOIN state ON phone.idphone = state.phone_idphone,
        JOIN total ON phone.idphone = total.phone_idphone`
    );
  }
}

module.exports = CalcManager;
