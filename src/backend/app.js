const express = require("express");
const path = require("path");
const port = process.env.PORT;
const app = express();

console.log(process.env);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
