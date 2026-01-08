import db from "../config/db.js";

export const AdminModel = {
  findByEmail(email) {
    const sql = "SELECT * FROM admins WHERE email = ?";
    return db.execute(sql, [email]);
  },

  create(name, email, password) {
    const sql = "INSERT INTO admins (name, email, password) VALUES (?, ?, ?)";
    return db.execute(sql, [name, email, password]);
  },
};
