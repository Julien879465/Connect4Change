const AbstractManager = require("./AbstractManager");

class TotalManager extends AbstractManager {
  constructor() {
    super({ table: "total" });
  }

  insert(total) {
    return this.database.query(
      `insert into ${this.table} (phone_idphone, ram_value, storage_value, antutu_value, total, total_weighted, category_name) values ( ?, ?, ?, ?, ?, ?, ?)`,
      [
        total.phoneIdphone,
        total.ramValue,
        total.storageValue,
        total.antutuValue,
        total.totalValue,
        total.totalWeightedValue,
        total.categoryName,
      ]
    );
  }

  update(total) {
    return this.database.query(
      `update ${this.table} set ram_value = ?, set storage_value = ?, set antutu_value = ?  set total = ?, set total_weighted = ?, set phone_idphone = ?, category_name = ? where id = ?`,
      [
        total.ramValue,
        total.storageValue,
        total.antutuValue,
        total.totalValue,
        total.totalWeightedValue,
        total.phoneIdphone,
        total.caterogyName,
        total.id,
      ]
    );
  }
}

module.exports = TotalManager;
