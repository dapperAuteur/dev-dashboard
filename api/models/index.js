const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/dev-dashboard-api",
  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
  }
);

module.exports.Issue = require("./issue");
module.exports.User = require("./user");
