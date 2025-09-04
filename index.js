 const express = require("express");
const buyproduct = require("./controllers/buyproduct");

const app = express();

 app.get("/buy/:id", buyproduct);

 app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});



