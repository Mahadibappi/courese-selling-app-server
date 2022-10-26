const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const categories = require("./data/Category.json");
const courses = require("./data/Course.json");

app.get("/", (req, res) => {
  res.send("Education server running");
});

app.get("/single-category", (req, res) => {
  res.send(categories);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("server running", port);
});
