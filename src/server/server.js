const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

//환경변수 적용
require("dotenv").config({ path: "../../.env" });

//CROS 설정
app.use(cors());

//parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//서버 접속
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Start Server : localhost:${port}`);
});

//mysql 접속 (환경변수 적용)
const DB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
//mysql 연결
DB.connect((err) => {
  if (!err) {
    console.log("Database connection complete");
  } else {
    console.log("connection is fail");
  }
});

//모든 데이터 불러오기
app.get("/cocktail/cards", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  DB.query("SELECT * FROM card", function (error, results, fields) {
    if (!error) {
      res.send(results);
      console.log(results);
    } else {
      console.log(error);
    }
  });
});
