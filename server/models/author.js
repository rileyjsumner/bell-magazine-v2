const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: String,
  pronouns: String,
  bio: String,
  photo_url: String,
  slug: String,
  title: String,
  rank: Number
});

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
