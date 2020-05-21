const path = require("path");
// It is always recommended to import native libraries
// before third-party libraries.
const express = require("express");
const app = express();
const router = require("./router");

// Express by default does have access to any of the public files.
// app.get("/", (req, res) => {
//   res.sendFile("index.html", {
//     root: path.join(__dirname, "../public/"),
//   })
// })

// app.get("/about", (req, res) => {
//   res.sendFile("about.html", {
//     root: path.join(__dirname, "../public/"),
//   })
// })

// Middlewares are functions that get executed during an incoming request.
// We can provide supplemental data for our request

// Middlewares
// Basic configureation, these lines are used almost everytime
app.use(express.urlencoded({ extended: false })); // This function is essential for your basic project configuration.
app.use(express.json()); // This fuction will parse any incoming json data
app.use(express.static("public")); // This function is telling express to gain access of everything that is inside the public folder.
app.set("views", 'views'); // Views are the files that you render in your web browser
app.set("view engine", "hbs");

app.use("/", router); // This line ensures that all the router get handled Express Router, but end up here in this app.js file, because this is where our server lives

app.listen(3000, () => {
  console.log("The server is now running on http://localhost:3000");
});
