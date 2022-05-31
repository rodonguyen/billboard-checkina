/** @format */

const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/", async function (req, res, next) {

  const date = getRecentListDate();
  const top10urlHeaders = {
    "x-rapidapi-host": "billboard-api2.p.rapidapi.com",
    "x-rapidapi-key": "5ed1cf5ef4msh16a5211c4c7f4f1p1dd1d8jsnaf2155c8eafa",  // To put in .env and gitignore .env file :)  
  };
  const top10url = "https://billboard-api2.p.rapidapi.com/hot-100?range=1-10&date=" + date; 

  // Getting top10 hit list
  const top10 = await axios
    .get(top10url, { headers: top10urlHeaders })
    .then((top10) => top10.data)
    .then((top10) => Object.values(top10.content))
    // .then((top10) => {
    //     // Add the date of the Top10 List 
    //     const dateArea = document.getElementById("date");
    //     dateArea.innerHTML = date;
    //     return Object.values(top10.content); })
    .catch((e) => {
      console.log(e);
      const statusCode = e.response.status;
      if (statusCode === 429)
        return res.status(statusCode).json({
          error: true,
          statusCode: statusCode,
          message: "Monthly API request quota reached!",
        });
      res
        .status(statusCode)
        .json({ error: true, statusCode: statusCode, message: e.message });
    });

  // Fetch into html/pug
  //// console.log(top10);
  res.render("index", { hitList: top10, date: date });
});

// --------------------------------------------------
// Utility functions

function getRecentListDate() {
    let date = new Date();
    // Get the last Saturday's date
    // If current date does not pass the desiredWeekday, then move backward 7 days
    const desiredWeekday = 5; // Weekday from 0 to 6. 5 = Saturday
    let backward = date.getDay() >= desiredWeekday? 0 : 7;
    date = date.setDate( date.getDate() - date.getDay() + desiredWeekday - backward);
    date = new Date(date).toISOString().slice(0, 10);
    return date;
}
// --------------------------------------------------
module.exports = router;
