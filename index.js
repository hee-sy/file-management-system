const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { Client } = require("pg");
const multer = require("multer");

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
const conn = new Client({
  host: "localhost",
  port: 5432,
  user: process.env.PG_USER,
  password: process.env.PG_PW,
  database: "file_management_system",
});

//middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
//TODO: routes

//connect to db & start listening
conn
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});
