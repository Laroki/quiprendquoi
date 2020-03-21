const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const title = "Qui prend quoi ?";

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.render("index", { title: title });
});

app.post("/party", function(req, res) {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));
});

app.get("/party/:id", function(req, res) {
  res.render("party", { title: title, subtitle: "Page événement" });
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));
