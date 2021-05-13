const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const Post = require("../models/posts");
const Author = require("../models/author");
const Category = require("../models/category");

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// DB Setup
const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL || 'http://localhost'
console.log("DB_URL: ", DATABASE_URL);
mongoose.connect(`mongodb://${DATABASE_URL}/belluwmadison`);

const db = mongoose.connection;

db.on('error', function (error) {
  // If first connect fails because server-database isn't up yet, try again.
  // This is only needed for first connect, not for runtime reconnects.
  // See: https://github.com/Automattic/mongoose/issues/5169
  if (error.message && error.message.match(/failed to connect to server .* on first connect/)) {
    setTimeout(function () {
      mongoose.connect(`mongodb://${DATABASE_URL}/belluwmadison`).catch(() => {
        console.log("Empty Catch clause");
        // empty catch avoids unhandled rejections
      });
    }, 20 * 1000);
  } else {
    // Some other error occurred.  Log it.
    console.error(new Date(), String(error));
  }
});

db.once("open", function(callback){
  console.log("Connection Succeeded");
});

// Fetch All
app.get('/posts', (req, res) => {
  Post.find({}, function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
});
app.get('/authors', (req, res) => {
  Author.find({}, function(error, authors) {
    if(error) { console.error(error); }
    res.send({
      authors: authors
    })
  }).sort({rank:-1})
});
app.get('/categories', (req, res) => {
  Category.find({}, function(error, categories) {
    if(error) { console.error(error); }
    res.send({
      categories: categories
    })
  }).sort({_id:-1})
});
// Create
app.post('/posts', (req, res) => {
  let db = req.db;

  let new_post = new Post({
    title: req.body.title,
    author_slug: req.body.author_slug,
    content: req.body.content,
    publish_date: req.body.publish_date,
    slug: req.body.slug,
    photo_url: req.body.photo_url,
    category_slug: req.body.category_slug,
    abstract: req.body.abstract
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
});
app.post('/authors', (req, res) => {
  let db = req.db;

  let new_author = new Author({
    name: req.body.name,
    slug: req.body.slug,
    pronouns: req.body.pronouns,
    bio: req.body.bio,
    photo_url: req.body.photo_url,
    title: req.body.title,
    rank: req.body.rank
  });

  new_author.save(function(error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Author saved successfully!'
    })
  })
});
app.post('/categories', (req, res) => {
  let db = req.db;

  let new_category = new Category({
    name: req.body.name,
    slug: req.body.slug,
    description: req.body.description
  });

  new_category.save(function(error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Category saved successfully!'
    })
  })
});
// Read
app.get('/post/:id', (req, res) => {
  let db = req.db;
  Post.findById(req.params.id, function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
});
app.get('/author/:id', (req, res) => {
  let db = req.db;
  Author.findById(req.params.id, function(error, author) {
    if(error) { console.error(error); }
    res.send(author)
  })
});
app.get('/category/:id', (req, res) => {
  let db = req.db;
  Category.findById(req.params.id, function(error, category) {
    if(error) { console.error(error); }
    res.send(category)
  })
});

app.get('/post/slug/:slug', (req, res) => {
  let db = req.db;
  console.log(req.params.slug)
  Post.find({ slug: req.params.slug }, function(error, post) {
    if (error) { console.error(error); }
    console.log(post);
    res.send(post)
  })
})

app.get('/author/slug/:slug', (req, res) => {
  let db = req.db;
  console.log(req.params.slug)
  Author.find({ slug: req.params.slug }, function(error, author) {
    if (error) { console.error(error); }
    console.log(author);
    res.send(author)
  })
})

app.get('/author/:slug/posts', (req, res) => {
  let db = req.db;
  Post.find({ author_slug: req.params.slug }, function(error, posts) {
    if (error) { console.error(error); }
    res.send(posts);
  })
})

app.get('/categories/:slug/posts', (req, res) => {
  let db = req.db;
  Post.find({ category_slug: req.params.slug }, function(error, posts) {
    if (error) { console.error(error); }
    res.send(posts);
  })
})

// Update
app.put('/posts/:id', (req, res) => {
  let db = req.db;
  Post.findById(req.params.id, function (error, post) {
    if (error) { console.error(error); }

    post.title = req.body.title
    post.content = req.body.content
    post.author_slug = req.body.author_slug
    post.publish_date = req.body.publish_date
    post.slug = req.body.slug
    post.photo_url = req.body.photo_url
    post.category_slug = req.body.category_slug
    post.abstract = req.body.abstract

    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
});
app.put('/authors/:id', (req, res) => {
  let db = req.db;
  Author.findById(req.params.id, function(error, author) {
    if(error) { console.error(error); }

    author.name = req.body.name;
    author.pronouns = req.body.pronouns;
    author.bio = req.body.bio;
    author.photo_url = req.body.photo_url;
    author.slug = req.body.slug;
    author.title = req.body.title;
    author.rank = req.body.rank;

    author.save(function(error) {
      if(error) { console.error(error); }
      res.send({
        success: true
      })
    })
  })
});
app.put('/categories/:id', (req, res) => {
  let db = req.db;
  Category.findById(req.params.id, function(error, category) {
    if(error) { console.error(error); }

    category.name = req.body.name;
    category.slug = req.body.slug;
    category.description = req.body.description

    category.save(function(error) {
      if(error) { console.error(error); }
      res.send({
        success: true
      })
    })
  })
});
// Delete
app.delete('/posts/:id', (req, res) => {
  let db = req.db;
  Post.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
});
app.delete('/authors/:id', (req, res) => {
  let db = req.db;
  Author.remove({
    _id: req.params.id
  }, function(err, author) {
    if(err)
      res.send(err)
    res.send({
      success: true
    })
  })
});
app.delete('/categories/:id', (req, res) => {
  let db = req.db;
  Category.remove({
    _id: req.params.id
  }, function(err, author) {
    if(err)
      res.send(err)
    res.send({
      success: true
    })
  })
});


app.listen(process.env.PORT || 8081)
