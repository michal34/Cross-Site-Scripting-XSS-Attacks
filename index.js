const express = require("express");
const app = express();
console.log("siema");

app.listen(3000, function () {
  console.log("listen on 3000");
});

// app.get("/", (req, res) => {
//   res.send("Siema");
// });
