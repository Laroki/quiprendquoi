const express = require("express");
const app = express();
const port = process.env.PORT;
const dotenv = require("dotenv").config();

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));
