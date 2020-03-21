const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const title = "Qui prend quoi ?";

app.set("view engine", "pug");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// Index
app.get("/", function (req, res) {
  res.render("index", {
    title: title
  });
});

// Create party
app.post("/party", function (req, res) {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({
      data
    }) => res.redirect(`/party/${data._id}`))
    .catch(err => res.send(err));
});

// Get party by id
app.get("/party/:id", function (req, res) {
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({
        data
      }) =>
      res.render("party", {
        party: data,
        title: data.name,
        url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
      })
    )
    .catch(err => console.log(err));
});

// Create item
app.post("/item/:id", function (req, res) {
  axios
    .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch(err => res.send(err));
});

// Delete Item, this route doesn't seems to work
app.post("/party/:partyId/items/:itemId", function (req, res) {
  axios
    .delete(
      `${process.env.API_URL}/party/${req.params.partyId}/items/${req.params.itemId}`
    )
    .then(() => res.redirect(`/party/${req.params.partyId}`))
    .catch(err => res.send(err));
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));