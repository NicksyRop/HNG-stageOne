const express = require("express");

const app = express();
const cors = require("cors");
require("dotenv").config();

//middleware
app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  return res.status(200).json({
    slackUsername: "Nicksy",
    backend: true,
    age: 25,
    bio: "My name is Nickson kipkorir a full-stack engineer from Kenya.",
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Serve running on http://localhost:3000`);
});
