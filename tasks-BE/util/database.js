const mongoose = require("mongoose");

// This function connects to MongoDB using the URL from the .env file
const DBConcction = callback => {
  const uri = process.env.MONGO_URL;

  if (!uri) {
    console.log("🚨 MONGO_URL is not defined in .env file");
    return;
  }

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // These options are essential for a stable connection
  })
  .then(() => {
    console.log("✅ DB Connected!");
    callback();  // Proceed after successful connection
  })
  .catch(err => {
    console.log("❌ MongoDB Connection Error:", err);
  });
}

exports.DBConcction = DBConcction;
