const express = require("express");
const router = express.Router();
const db = require("../db/database");

// SIGNUP API
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  db.run(
    `INSERT INTO users (name, email, password) VALUES (?,?,?)`,
    [name, email, password],
    function (err) {
      if (err) {
        return res.status(400).json({ message: "Email already exists" });
      }
      res.json({ message: "User registered successfully" });
    }
  );
});

// LOGIN API
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(
    `SELECT * FROM users WHERE email=? AND password=?`,
    [email, password],
    (err, row) => {
      if (!row) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      res.json({
        message: "Login successful",
        user: { id: row.id, name: row.name, email: row.email }
      });
    }
  );
});

module.exports = router;
