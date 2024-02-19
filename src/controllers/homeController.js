const connection = require("../config/database");

const getHomePage = (req, res) => {
  // connection.query("select * from Users u", (err, result, fields) => {
  //   console.log("result=>>", result);
  // });
  // res.send("Hello World!");
  return res.render("home.ejs");
};
const getAbc = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  const email = req.body.email;
  const name = req.body.fname;
  const city = req.body.city;
  console.log("postCreateUser_req", email, name, city);

  connection.query(
    `INSERT INTO Users(email,name,city) VALUES (?,?,?)`,
    [email, name, city],
    (err, result) => {
      console.log("created user error", err);
      console.log("created user success", result);
      res.send("created new user success");
    }
  );
};

module.exports = {
  getHomePage,
  getAbc,
  postCreateUser,
};
