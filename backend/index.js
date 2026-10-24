require("dotenv").config();
const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get("/employee/", (req, res) => {
  pool.query("SELECT * FROM emp", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get("/employee/:id", (req, res) => {
  const id = req.params.id;
  pool.query("SELECT * FROM emp WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  });
});

app.post("/employee/create/", (req, res) => {
  const { id, name, email } = req.body;
  pool.query(
    "INSERT INTO emp (id, name, email) VALUES (?, ?, ?)",
    [id, name, email],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ status: 'OK', message: 'Created data compleate' });
    }
  );
});

app.put("/employee/edit/:id", (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  pool.query(
    "UPDATE emp SET name = ?, email = ? WHERE id = ?",
    [name, email, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ status: 'OK', message: `Update ID: ${id} compleate` });
    }
  );
});

app.delete("/employee/delete/:id", (req, res) => {
  const id = req.params.id;
  pool.query("DELETE FROM emp WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ status: 'OK', message: `Delete ID: ${id} compleate` });
  });
});

app.get("/", (req, res) => {
  res.send("Hello Lab08: get, post, put, delete");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});