const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",  // Use your MySQL username
  password: "",  // Use your MySQL password
  database: "company_dashboard"
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit();
  }
  console.log("Connected to the database.");
});

// API endpoints

// Add attendance record
app.post("/attendance", (req, res) => {
  const { employee_name, status, date } = req.body;
  const query = "INSERT INTO attendance (employee_name, status, date) VALUES (?, ?, ?)";
  db.query(query, [employee_name, status, date], (err, result) => {
    if (err) {
      res.status(500).send("Error adding attendance record.");
      return;
    }
    res.status(200).send("Attendance record added successfully.");
  });
});

// Get attendance data
app.get("/attendance", (req, res) => {
  const query = "SELECT * FROM attendance";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching attendance data.");
      return;
    }
    res.json(results);
  });
});

// Add leave record
app.post("/leave", (req, res) => {
  const { employee_name, status, leave_date } = req.body;
  const query = "INSERT INTO leave_requests (employee_name, status, leave_date) VALUES (?, ?, ?)";
  db.query(query, [employee_name, status, leave_date], (err, result) => {
    if (err) {
      res.status(500).send("Error adding leave record.");
      return;
    }
    res.status(200).send("Leave record added successfully.");
  });
});

// Get leave data
app.get("/leave", (req, res) => {
  const query = "SELECT * FROM leave_requests";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching leave data.");
      return;
    }
    res.json(results);
  });
});

// Add payroll record
app.post("/payroll", (req, res) => {
  const { employee_name, salary } = req.body;
  const query = "INSERT INTO payroll (employee_name, salary) VALUES (?, ?)";
  db.query(query, [employee_name, salary], (err, result) => {
    if (err) {
      res.status(500).send("Error adding payroll record.");
      return;
    }
    res.status(200).send("Payroll record added successfully.");
  });
});

// Get payroll data
app.get("/payroll", (req, res) => {
  const query = "SELECT * FROM payroll";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching payroll data.");
      return;
    }
    res.json(results);
  });
});

// Add travel record
app.post("/travel", (req, res) => {
  const { employee_name, destination, travel_cost } = req.body;
  const query = "INSERT INTO travel (employee_name, destination, travel_cost) VALUES (?, ?, ?)";
  db.query(query, [employee_name, destination, travel_cost], (err, result) => {
    if (err) {
      res.status(500).send("Error adding travel record.");
      return;
    }
    res.status(200).send("Travel record added successfully.");
  });
});

// Get travel data
app.get("/travel", (req, res) => {
  const query = "SELECT * FROM travel";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching travel data.");
      return;
    }
    res.json(results);
  });
});

// Add expense record
app.post("/expenses", (req, res) => {
  const { category, amount, expense_date } = req.body;
  const query = "INSERT INTO expenses (category, amount, expense_date) VALUES (?, ?, ?)";
  db.query(query, [category, amount, expense_date], (err, result) => {
    if (err) {
      res.status(500).send("Error adding expense record.");
      return;
    }
    res.status(200).send("Expense record added successfully.");
  });
});

// Get expense data
app.get("/expenses", (req, res) => {
  const query = "SELECT * FROM expenses";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching expense data.");
      return;
    }
    res.json(results);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
