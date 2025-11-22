require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database");
const Blog = require("./Model/blogModel");
const app = express();
app.use(express.json());
connectToDatabase();

app.get("/", (request, response) => {
  response.json({ Message: "helllllo worrrldd!" });
});

app.post("/blog", async (req, res) => {
  const { title, description, subtitle, image } = req.body;

  await Blog.create({ title, description, subtitle, image });
  res.status(200).json({
    message: "blog api is workingggggggg...",
  });
});
app.listen(process.env.PORT, () => console.log("port 3000 is running ...."));
