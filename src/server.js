const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express(); // app express
const port = process.env.PORT || 3001;
const hostname = process.env.HOST_NAME || require("dotenv").config();

// config template engine
configViewEngine(app);

app.use("/", webRoutes);

//test connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "demodocker",
});
connection.query("select * from Users", (err, result, fields) => {
  console.log("result=>>", result);
  console.log("fields=>>", fields);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
