const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./invoice.db", (err) => {
  if (err) console.error(err.message);
  else console.log("Connected to SQLite database");
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS invoices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      invoice_number TEXT UNIQUE NOT NULL,
      client_name TEXT NOT NULL,
      date TEXT NOT NULL,
      amount REAL NOT NULL,
      status TEXT NOT NULL
    )
  `);
});

module.exports = db;
