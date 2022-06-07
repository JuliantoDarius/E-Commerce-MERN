import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/e-commerce", (err) => {
  if (err) throw err;
  console.log("Database Connected");
});
