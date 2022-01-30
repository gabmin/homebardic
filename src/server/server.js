const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const crypto = require("crypto");
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

// 진 데이터 가져오기
app.get("/cocktail/cards/jin", (req, res) => {
  DB.query(
    `SELECT * FROM card WHERE base LIKE "%진%"`,
    function (error, results, fields) {
      if (!error) {
        res.send(results);
        console.log(results);
      } else {
        console.log(error);
      }
    }
  );
});

// 보드카 데이터 가져오기
app.get("/cocktail/cards/vodka", (req, res) => {
  DB.query(
    `SELECT * FROM card WHERE base LIKE "%보드카%"`,
    function (error, results, fields) {
      if (!error) {
        res.send(results);
        console.log(results);
      } else {
        console.log(error);
      }
    }
  );
});

// 럼 데이터 가져오기
app.get("/cocktail/cards/rum", (req, res) => {
  DB.query(
    `SELECT * FROM card WHERE base LIKE "%럼%"`,
    function (error, results, fields) {
      if (!error) {
        res.send(results);
        console.log(results);
      } else {
        console.log(error);
      }
    }
  );
});

// 위스키 데이터 가져오기
app.get("/cocktail/cards/whiskey", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  DB.query(
    `SELECT * FROM card WHERE base LIKE "%위스키%"`,
    function (error, results, fields) {
      if (!error) {
        res.send(results);
      } else {
        console.log(error);
      }
    }
  );
});

// 데킬라 데이터 가져오기
app.get("/cocktail/cards/tequila", (req, res) => {
  DB.query(
    `SELECT * FROM card WHERE base LIKE "%데킬라%"`,
    function (error, results, fields) {
      if (!error) {
        res.send(results);
        console.log(results);
      } else {
        console.log(error);
      }
    }
  );
});

// 브랜디 데이터 가져오기
app.get("/cocktail/cards/brandy", (req, res) => {
  DB.query(
    `SELECT * FROM card WHERE base LIKE "%브랜디%"`,
    function (error, results, fields) {
      if (!error) {
        res.send(results);
        console.log(results);
      } else {
        console.log(error);
      }
    }
  );
});

// 브랜디 데이터 가져오기
app.get("/cocktail/cards/tequila", (req, res) => {
  DB.query(
    `SELECT * FROM card WHERE base LIKE "%브랜디%"`,
    function (error, results, fields) {
      if (!error) {
        res.send(results);
        console.log(results);
      } else {
        console.log(error);
      }
    }
  );
});

// 리큐어 데이터 가져오기
app.get("/cocktail/cards/liqueur", (req, res) => {
  DB.query(
    `SELECT * FROM card WHERE base LIKE "%리큐어%"`,
    function (error, results, fields) {
      if (!error) {
        res.send(results);
        console.log(results);
      } else {
        console.log(error);
      }
    }
  );
});

// 리큐어 데이터 가져오기
app.get("/cocktail/cards/others", (req, res) => {
  DB.query(
    `SELECT * FROM card WHERE base LIKE "%기타%"`,
    function (error, results, fields) {
      if (!error) {
        res.send(results);
        console.log(results);
      } else {
        console.log(error);
      }
    }
  );
});

// 추가하기
app.post("/cocktail/cards", (req, res) => {
  const name = req.body.name;
  const base = req.body.base;
  const ingredient = req.body.ingredient;
  const method = req.body.method;
  const glass = req.body.glass;
  const description = req.body.description;

  const sql =
    "INSERT INTO card (name, base, ingredient, method, glass, description) VALUES (?, ?, ?, ?, ?, ?)";
  DB.query(
    sql,
    [name, base, ingredient, method, glass, description],
    function (err, result, field) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
      res.send(result);
    }
  );
});

// 삭제하기
app.delete("/cocktail/cards/:id", (req, res) => {
  const sql = "DElETE FROM card WHERE id = ?";
  DB.query(sql, [req.params.id], function (err, result, field) {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    res.send(result);
  });
});

// 수정하기
app.put("/cocktail/cards/:id", (req, res) => {
  const name = req.body.name;
  const base = req.body.base;
  const ingredient = req.body.ingredient;
  const method = req.body.method;
  const glass = req.body.glass;
  const description = req.body.description;
  const id = req.body.id;

  const sql =
    "UPDATE card SET name=?, base=?, ingredient=?, method=?, glass=?, description=? WHERE id=?";
  DB.query(
    sql,
    [name, base, ingredient, method, glass, description, id],
    function (err, result, field) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
      res.send(result);
    }
  );
});
