const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (iduser, email, password, firstname) values (?, ?, ?, ?)`,
      [user.iduser, user.email, user.password, user.firstname]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set email = ?, set password = ?, set firstname = ? where id = ?`,
      [user.email, user.password, user.firstname, user.id]
    );
  }

  findByEmail(email) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
