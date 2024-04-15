import mysql from "mysql";
import dotenv from "dotenv";
import express from "express";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;

const MYSQL_HOST = process.env.MYSQL_HOST
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
// const MYSQL_URI = process.env.MYSQL_URI;
const connection = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
})

connection.connect((err) => {
  if(err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL");
connection.query(
  "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT, email VARCHAR(255))",
  (err, results) => {
    if(err) {
      console.error("Error creating table: ", err);
      return;
    }
    console.log("Created table")
  }
)
})
app.use(express.json());

app.get("/user", async (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if(err) {
      console.error("Error querying MySQL: ", err);
      return;
    }
    res.json(results)
  })
})

app.post("/user", async (req, res) => {
  const { name, age, email } = req.body
  connection.query("INSERT INTO users (name, age, email) VALUES (?, ?, ?)", [name, age, email], (err, results) => {
    if(err) {
      console.error("Error querying MySQL: ", err);
      return;
    }
    res.json({ id: results.insertId, name, age, email });
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})