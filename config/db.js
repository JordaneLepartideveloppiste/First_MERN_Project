const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

mongoose.connect(
  "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.dmyft.mongodb.net/rezoso_mern",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log("Mongoose connect OK"))
  .catch((err) => console.log("Mongoose error connection" + err))


  
