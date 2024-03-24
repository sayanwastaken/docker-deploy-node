const { log } = require("console");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "hi from express docker container" });
});

app.listen(8000, () => {
  log("listening on 8000 port");
});
