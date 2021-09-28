var express = require('express');
var router = express.Router();
const axios = require("axios");

/* GET lyrics */
router.get('/:artist/:songTitle', function(req, res, next) {
  const { artist, songTitle } = req.params;
  const lyricsUrl = "https://private-amnesiac-2ca08-lyricsovh.apiary-proxy.com/v1/" + 
                  artist + "/" + songTitle; 

  axios
    .get(lyricsUrl)
    .then(response => {
      // console.log(response.data);
      return res.json(response.data);
    })
    .catch((error) => console.log(error));
});

module.exports = router;