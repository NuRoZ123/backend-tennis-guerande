const express = require("express");

const router = require("./router");
const config = require("./config");

const app = express();

app.use("/", router);

app.listen(config.PORT, () => {
  console.log("L'application tourne sur le port " + config.PORT + ".");
});