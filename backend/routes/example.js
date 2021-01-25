const express = require("express");
const example = express.Router();

example.get("/", async (req, res) => {
  await res.json("GET request to the homepage");
});
example.post("/", async (req, res) => {
  await res.json("POST request to the homepage");
});

module.exports = example;
