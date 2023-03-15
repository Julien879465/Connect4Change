const AbstractManager = require("./AbstractManager");

class CalcManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  getInfo() {
    return this.database.query(
      `select brand, model, screen_size, network, antutu_indice, ram, storage, url, total.total, total.ram_value, total.storage_value, total.antutu_value, total.total_weighted, total.category_name, state.name, state.weighting from ${this.table} JOIN state ON phone.idphone = state.phone_idphone JOIN total ON phone.idphone = total.phone_idphone `
    );
  }
}

module.exports = CalcManager;
