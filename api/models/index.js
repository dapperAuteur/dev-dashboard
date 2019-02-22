const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(
  // process.env.MONGODB_URI || "mongodb://localhost/dev-dashboard-api",
  "mongodb://localhost/dev-dashboard-api",
  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
  }
);

module.exports.Comment = require("./comment");
module.exports.Issue = require("./issue");
module.exports.Tag = require("./tag");
module.exports.User = require("./user");
