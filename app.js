const express = require("express");
const bodyParser = require("body-parser");

//creating my webserver using express
const app = express();
app.use(bodyParser.json({ extended: true }));

//when uploaded to heroku - starting listening for traffic on the port allocated or on localhost 3000 and sending consolelog
app.listen(process.env.PORT || 3000, function () {
  console.log("listening on port allocated by heroku");
});

app.get("/", function(request, response) {
    console.log(request);
    response.send("<h1>Hello, World!</h1>");
  });