const express = require("express"); // Here we just imported it
const bodyParser = require("body-parser");

const app = express(); // Here, we now able to use it

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
}); // what to render when something is requested on that server

app.post("/index.html", function (req, res) {
  // Here it will not work with "/" instead we have to write "/index.html" to get the resuly.
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  res.send("The result is " + (num1 + num2));
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("Your BMI is " + bmi);
});

app.listen(5000, function () {
  console.log("Listening to port 5000");
});
