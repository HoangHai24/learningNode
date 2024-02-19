const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app express
const port = process.env.PORT || 3001;
const hostname = process.env.HOST_NAME || require("dotenv").config();

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// config template engine
configViewEngine(app);

app.use("/", webRoutes);

//test connection

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
