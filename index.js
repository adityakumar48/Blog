const express = require("express");
const app = express();
app.get("/", (res, req) => {
  res.send("Hello Mern Blog");
});
app.listen();
