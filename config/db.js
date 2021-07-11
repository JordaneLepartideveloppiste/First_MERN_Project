const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

mongoose.connect(
  "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.dmyft.mongodb.net/rezoso_mern",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log("Oh putain ça se connecte sa mère"))
  .catch((err) => console.log("Va niquer ta mère l'erreur c'est :" + err))


  
