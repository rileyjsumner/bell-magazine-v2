const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  author_slug: Array,
  abstract: String,
  publish_date: Date,
  content: String,
  photo_url: String,
  category_slug: String,
  slug: String
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
