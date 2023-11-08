const express = require("express");
const app = express();
app.use("/", (req, res) => {
  res.send("app rendered");
});
app.listen(3000, () =>
  console.log("server listening")
);
