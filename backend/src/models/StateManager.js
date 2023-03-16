const AbstractManager = require("./AbstractManager");

class StateManager extends AbstractManager {
  constructor() {
    super({ table: "state" });
  }

  insert(state) {
    return this.database.query(
      `insert into ${this.table} (name, weighting, phone_idphone) values ( ?, ?, ?)`,
      [state.name, state.weighting, state.phoneIdphone]
    );
  }

  update(state) {
    return this.database.query(
      `update ${this.table} set name = ?, set weighting = ?, set phone_idphone = ? where id = ?`,
      [state.name, state.weighting, state.phoneIdphone, state.id]
    );
  }
}

module.exports = StateManager;
