const connection = require("../config/database");

const getHomePage = (req, res) => {
  connection.query("select * from Users u", (err, result, fields) => {
    console.log("result=>>", result);
  });
  res.send("Hello World!");
};
const getAbc = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getAbc,
};
