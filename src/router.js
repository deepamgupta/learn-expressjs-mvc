// This file will handle all the routes
// Whenever we visit a route, it is the job of this router file to tell the browser that we have visites a route

const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller");

router.get("/", controller.renderHomePage);
router.post("/", controller.getWeather);
router.get("/about", controller.renderAboutPage);

// router.get('/', (req,res)=>{ // This is a route handler
//     // res.send('Weather App')
//     res.render('index', {
//       title: 'Weather Finder'
//     }); // We do not put .hbs because, we already told express in the "view engine" property.
// });

// router.get('/about',(req,res)=>{
//     // res.send('I\'m cool');
//     res.render('about')
// });

module.exports = router;
