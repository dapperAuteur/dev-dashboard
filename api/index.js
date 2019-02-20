require("dotenv").config();
const express = require("express"),
  app = express();
(cors = require("cors")), (bodyParser = require("body-parser"));

const db = require("./models");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
