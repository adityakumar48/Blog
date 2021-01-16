const express = require("express");
const connect = require("./config/db");
require("dotenv").config();
const app = express();

// Connnect Monogodb Database
connect();

app.get("/", (req, res) => {
  res.send("Hello Mern Blog");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Your App is Running");
});
