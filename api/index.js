require("dotenv").config();
const express = require("express"),
  app = express();
(cors = require("cors")), (bodyParser = require("body-parser"));

const db = require("./models");

const tagRoutes = require("./routes/tagRoutes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// start example route
const cb0 = function(req, res, next) {
  console.log("CB0");
  next();
};

const cb1 = function(req, res, next) {
  console.log("CB1");
  next();
};

app.get(
  "/example/d",
  [cb0, cb1],
  function(req, res, next) {
    console.log("the response will be sent by the next function...");
    next();
  },
  function(req, res) {
    res.send("Hello from D!");
  }
);

// end example routes

app.use("/tags", tagRoutes);

const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
