const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", function (req, res) {
  res.send("Thanks for posting that");
});

app.listen(4000, function () {
  console.log("Server started on port 4000");
});
