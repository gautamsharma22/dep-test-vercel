const express = require("express");
const app = express();
app.use("/", (req, res) => {
  res.send("Server running");
});
app.listen(3000, () => console.log("Server listening on 5000"));
