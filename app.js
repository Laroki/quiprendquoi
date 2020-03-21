const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.render("index", { title: "Qui prend quoi ?" });
});

app.post("/party", function(req, res) {
  res.send("Post OK");
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));
