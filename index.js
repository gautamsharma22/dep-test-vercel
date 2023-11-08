const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use("/", (req, res) => {
  res.send(`app rendered on ${process.env.LISTEN_PORT}`);
});
app.listen(process.env.LISTEN_PORT, () =>
  console.log(`Server listening on ${process.env.LISTEN_PORT}`)
);
