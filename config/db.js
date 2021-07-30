const config = require("config");
const mongoose = require("mongoose");
const dbUrl = config.get("dbUrl");

const dbConnection = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to DB.");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = dbConnection;
