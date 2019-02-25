require("dotenv").config();
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const logger = require("morgan");
const express = require("express"),
  app = express();
(cors = require("cors")), (bodyParser = require("body-parser"));


const commentRouters = require('./routes/commentRoutes');
const issueRoutes = require('./routes/issueRoutes');
const tagRoutes = require('./routes/tagRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const updatePassword = require('./routes/updatePassword');


app.use(cors());
app.use(logger("dev"));
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

app.use('/updatePassword', updatePassword);
// end example routes

app.use("/api/ver0001/auth", authRoutes);
app.use("/api/ver0001/comments", commentRouters);
app.use("/api/ver0001/issues", issueRoutes);
app.use("/api/ver0001/tags", tagRoutes);
app.use("/api/ver0001/user", userRoutes);
// app.use('/user', userRoutes); // to be used by admins to manage users

const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
