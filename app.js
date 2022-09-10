const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
var items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  var today = new Date();
  var options = { weekday: "long", day: "numeric", month: "long" };
  var cDate = today.toLocaleDateString("en-US", options);

  res.render("list", {
    day: cDate,
    Tasks: items,
  });
});

app.post("/", (req, res) => {
  var item = req.body.newTask;
  items.push(item);

  res.redirect("/");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
