const express = require("express");
const connect = require("./config/db");
const router = require("./routes/userRoutes");
require("dotenv").config();
const app = express();

// Connnect Monogodb Database
connect();

app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Your App is Running");
});
