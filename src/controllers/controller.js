// Handling the routes is the responsibility of controller and aldo interacting with the views
// This will power our app
// These functions are essentially the callback fuctions that take place in our route handlers
// Controller is the middleman b/w view and model
const axios = require("axios");

const API_KEY = "c5bf46c79d8ac35084fc137bcf95f44d";

const Weather = require("../model/Weather");

exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.getWeather = (req, res) => {
  // res.send(`You typed ${req.body.city}`)
  // console.log(req);
  const city = req.body.city;

  // We need to apply http://, because Express and axios wants to make sure that it is a secure site.
  // const url = `api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const weather = new Weather(req.body.city);
  weather.validateUserInput();

  if (weather.errors.length) {
    res.render("index", {
      error: weather.errors.toString(),
    });
  } else {
    axios
      .get(url)
      .then((response) => {
        // console.log(response);
        const { temp: temperature } = response.data.main // To fetch out data from object
        const { name: location } = response.data

        res.render("index", {
          weather: `It is currently ${temperature} degrees in ${location}`,
        });
      })
      .catch((error) => {
        console.log(error);
      }); // Since, it is a promise based method, we need to call then and handle for errors
  }
};

exports.renderAboutPage = (req, res) => {
  res.render("about");
};
