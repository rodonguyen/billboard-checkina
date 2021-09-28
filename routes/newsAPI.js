/** @format */

var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET news */
router.get("/:artist", function (req, res, next) {
  const { artist } = req.params;
  const newsUrl = `https://newsapi.org/v2/everything?qInTitle=${artist}&apiKey=a8c0e76acc3849c09783c31fbcc58283&totalResults=5`;

  axios
    .get(newsUrl)
    .then((response) => {
      return res.json(response.data.articles);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
