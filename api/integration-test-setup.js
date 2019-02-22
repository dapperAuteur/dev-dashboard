const mongoose = require("mongoose");
require("dotenv").config();

beforeEach(() => {
  return mongoose
    .connect(process.env.CONNECTION_STRING_TEST, {
      useNewUrlParser: true
    })
    .then(() => {
      return mongoose.connection.db.collection("tags").deleteMany();
    })
    .catch(error => {
      console.error("Error connecting to db", error);
    });
});
