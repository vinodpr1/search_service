import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  id: String,
  title: String,
  type: String,
  location: String,
  rooms: Number,
  bathrooms: Number,
  area: String,
  price: String,
  transactionType: String,
  views: Number,
  image: String
});

const Property = mongoose.model("Properties", propertySchema);
export default Property;