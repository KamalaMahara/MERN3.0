const express = require("express");
const connectToDatabase = require("./database");
const app = express();
connectToDatabase();

app.get("/", (request, response) => {
  response.json({ Message: "helllllo worrrldd!" });
});
app.get("/about", (req, res) => {
  res.status(200).json({ Message: "this is about page" });
});
app.listen(3000, () => console.log("port 3000 is running ...."));
