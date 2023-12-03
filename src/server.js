const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express(); // app express
const port = process.env.PORT || 3001;
const hostname = process.env.HOST_NAME || require("dotenv").config();

// config template engine
configViewEngine(app);

app.use("/", webRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
