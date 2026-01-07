import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "caki",
  password: process.env.DB_PASSWORD || "caki",
  database: process.env.DB_NAME || "chocotan",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default db;