const config = require("config");
const mongoose = require("mongoose");
const dbUrl = config.get("./default.json");

const dbConnection = async () => {
  await mongoose.connect();
  console.log("connected to DB.");
};
