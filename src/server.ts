import express, { Request, Response, NextFunction } from "express";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//서버 접속
const port = 3000;
app.listen(port, () => {
  console.log(`Start Server : localhost: ${port}`);
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

//환경변수 적용
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB 접속
// const connect = () => {
//   if (process.env.NODE_ENV !== "production") {
//     mongoose.set("debug", true);
//   }
// };

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    userCreateIndex: true,
  })
  .then(() => {
    console.log("Successfully connected to mongodb");
  })
  .catch((err: string) => console.log(err));
