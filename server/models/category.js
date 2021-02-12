const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: String,
  slug: String,
  description: String
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
