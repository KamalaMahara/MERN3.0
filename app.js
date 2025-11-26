require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database");
const Blog = require("./Model/blogModel");
const app = express();
app.use(express.json());
connectToDatabase();
const { storage, multer } = require("./Middleware/configMulter"); //importing the storage and multer object from configMulter.js
const upload = multer({ storage: storage }); //creating the upload object by passing the storage object to multer function

app.get("/", (request, response) => {
  response.json({ Message: "helllllo worrrldd!" });
});

app.post("/blog", upload.single("image"), async (req, res) => {
  const { title, description, subtitle, image } = req.body;
  const filename = req.file.filename;
  if (!title || !description || !subtitle || !image) {
    return res.status(400).json({
      message: "please provide all the required fields",
    });
  }

  await Blog.create({ title, description, subtitle, image: filename });

  res.status(200).json({
    message: "blog api is workingggggggg...",
  });
});
app.get("/blog", async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json({
    message: "all blogs fetched successfully",
    data: blogs,
  });
});
app.listen(process.env.PORT, () => console.log("port 3000 is running ...."));
