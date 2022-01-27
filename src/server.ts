import express, { Request, Response, NextFunction } from "express";
import { Schema, model, connect } from "mongoose";
import "dotenv/config";
import { CoktailInfo } from "./types";

const bodyParser = require("body-parser");
const app = express();

//서버 접속
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`서버 접속 완료!!`);
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB 접속
const mongo_uri = process.env.DB_URI;

const schema = new Schema<CoktailInfo>({
  card: {
    name: { type: String, required: true },
    base: { type: String, required: true },
    ingredient: Array(String),
    method: String,
    glass: String,
    description: String,
  },
});

const cardModel = model<CoktailInfo>("Cards", schema);

async function run(): Promise<void> {
  await connect("mongodb://localhost:27017/homebardic");

  const doc = new cardModel({
    name: "올드 패션드",
    base: "위스키 45ml",
    ingredient: ["앙고스투라 비터스 2dash", "각설탕 1개"],
    method: "빌드",
    glass: "올드 패션드 글라스",
    description: "각설탕이 앙고스투라 비터스가 스며들게 한다.",
  });
  await doc.save();

  console.log(doc);
}

run();
