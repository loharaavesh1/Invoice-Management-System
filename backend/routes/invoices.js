const express = require("express");
const router = express.Router();
const db = require("../db/database");

// CREATE invoice
router.post("/", (req, res) => {
  const { invoice_number, client_name, date, amount, status } = req.body;

  db.run(
    `INSERT INTO invoices VALUES (NULL,?,?,?,?,?)`,
    [invoice_number, client_name, date, amount, status],
    function (err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ message: "Invoice Created", id: this.lastID });
    }
  );
});

// READ invoices
router.get("/", (req, res) => {
  db.all("SELECT * FROM invoices", [], (err, rows) => {
    res.json(rows);
  });
});

router.get("/:id", (req, res) => {
  db.get(
    "SELECT * FROM invoices WHERE id = ?",
    [req.params.id],
    (err, row) => {
      res.json(row);
    }
  );
});

// UPDATE invoice
router.put("/:id", (req, res) => {
  const { client_name, date, amount, status } = req.body;

  db.run(
    `UPDATE invoices SET client_name=?, date=?, amount=?, status=? WHERE id=?`,
    [client_name, date, amount, status, req.params.id],
    () => res.json({ message: "Invoice Updated" })
  );
});

// DELETE invoice
router.delete("/:id", (req, res) => {
  db.run(
    `DELETE FROM invoices WHERE id=?`,
    req.params.id,
    () => res.json({ message: "Invoice Deleted" })
  );
});

module.exports = router;
