$(function () { // wait for on-ready

  var PostsView = require('./views/posts');

  var PostTitlesView = require('./views/postTitles');

  var AddPost = require('./views/AddPost');

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
    firebase: new Backbone.Firebase("https://curriedav.firebaseio.com/")
    //localStorage: new Backbone.LocalStorage("posts")
  });

  $("#addBtn").click(function () {
    console.log("Spruce-Monster!");

    var newTitle = $("#title").val();
    var newContent = $("#content").val();
    var newPostObj = {title: newTitle, content: newContent};

    app.collections.posts.create(newPostObj);
  });

  app.collections.posts = new Posts();

  app.views.posts = new PostsView({collection: app.collections.posts});

  app.views.postTitles = new PostTitlesView({collection: app.collections.posts});
  
  //app.views.addpost = new AddPost ({collection: app.collection.posts});

  app.collections.posts.fetch();

  window.app = app;

});