const db = require("../config/db");

class Produto {
  static getAll(callback) {
    db.query("SELECT * FROM produtos", callback);
  }

  static getById(id, callback) {
    db.query("SELECT * FROM produtos WHERE id = ?", [id], callback);
  }

  static create(data, callback) {
    db.query("INSERT INTO produtos SET ?", data, callback);
  }

  static update(id, data, callback) {
    db.query("UPDATE produtos SET ? WHERE id = ?", [data, id], callback);
  }

  static delete(id, callback) {
    db.query("DELETE FROM produtos WHERE id = ?", [id], callback);
  }
}

module.exports = Produto;
