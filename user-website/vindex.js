const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employees",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to employees db!");
});

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/getuservue", (req, res) => {
  let sql = `SELECT user_name FROM users`;
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});
// //UPDATE user
// app.get("/updateuser", (req, res) => {
//   let newpassword = "12345";
//   let studentID = "2";
//   let sql = `UPDATE users SET user_password='${newpassword}' where user_id = '${studentID}'`;
//   let query = db.query(sql, (err, results) => {
//     if (err) {
//       throw err;
//     }
//     res.send("User updated");
//   });
// });
// //DELETE user
// app.get("/deleteuser", (req, res) => {
//   let studentID = "3";
//   let sql = `DELETE FROM users WHERE user_id = '${studentID}'`;
//   let query = db.query(sql, (err, results) => {
//     if (err) {
//       throw err;
//     }
//     res.send("User updated");
//   });
// });
//INSERT user
// app.get("/insertuser", (req, res) => {
//   let data = {
//     user_name: "Ivan",
//     user_email: "ivan@gmail.com",
//     user_password: "12345",
//   };
//   let sql = `INSERT INTO users SET ?`;
//   let query = db.query(sql, data, (err) => {
//     if (err) {
//       throw err;
//     }
//     res.send("User updated");
//   });
// });
//Insert user from vue
app.post("/insertuservue", (req, res) => {
  let data = req.body;
  let sql = `INSERT INTO users SET ?`;
  let query = db.query(sql, data, (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        res.send("Email already in use");
        return false;
      }
      throw err;
    }
    res.send("User updated");
  });
});
//DELETE user from vue
app.post("/deleteuservue", (req, res) => {
  let sql = `DELETE FROM users WHERE token = 1 `;
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send("User updated");
  });
});
//GET user from vue
app.post("/getuservue", (req, res) => {
  let data = req.body.user_name;
  let sql = `SELECT * FROM users WHERE user_name = '${data}'`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
    console.log(result);
    // return result;
  });
  // console.log(data);
});
app.put("/updatetokenvue", (req, res) => {
  let data = req.body;
  let sql = `UPDATE users SET token = ? WHERE user_id = ? `;
  let query = db.query(sql, [data.token, data.user_id], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
    console.log(result);
    // return result;
  });
  // console.log(data);
});
app.listen("3000", () => {
  console.log("Server is running on port 3000");
});
