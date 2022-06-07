import mongoose from "mongoose";

const schema = new mongoose.Schema({
  itemName: String,
  description: String,
  price: Number,
  stock: Number,
  image: String,
});

const Item = mongoose.model("item", schema);

export default Item;
