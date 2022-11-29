const mongoose = require("mongoose");
const constant = require("./constants/constant.json")

mongoose.connect(constant.Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log(constant.connectionMessage);
});
