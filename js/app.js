$(function () { // wait for on-ready

  var PostsView = require('./views/posts');

  var PostTitlesView = require('./views/postTitles');

  var app = {};

  app.collections = {}
  app.views = {}

  var Post = Backbone.Model.extend({
    defaults: {
      title: "A post!",
      content: "Lorem Ipsum Baby!",
      date: new Date(),
      display: true
    }
  });

  var Posts = Backbone.Collection.extend({
    model: Post,
    localStorage: new Backbone.LocalStorage("posts")
  });

  app.collections.posts = new Posts();

  app.views.posts = new PostsView({collection: app.collections.posts});

  app.views.postTitles = new PostTitlesView({collection: app.collections.posts});
  
  app.collections.posts.fetch();

  window.app = app;

});