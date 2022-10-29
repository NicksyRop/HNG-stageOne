const express = require("express");

const app = express();
var cors = require("cors");
require("dotenv").config();

//middleware
app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  return res.status(200).json({
    username: "Nicksy",
    backend: true,
  });
});

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Serve running on http://localhost:3000`);
});
