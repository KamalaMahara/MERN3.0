const mongoose = require("mongoose");

async function connectToDatabase() {
  await mongoose.connect(
    "mongodb+srv://kmlamahara:kmla_db@cluster0.d6zxgaf.mongodb.net/?appName=Cluster0"
  );
  console.log("Database connected successfullly...");
}

module.exports = connectToDatabase;
