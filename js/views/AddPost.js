AddPost = Backbone.View.extend({
  el: '#form',

  events: {
    "click #addBtn": "addPost"
  },
        
  initialize: function () {

  },
  
  render: function () {

  },

  addPost: function() {
    event.preventDefault();
    console.log("Spruce-Monster!");

    var newTitle = $("#title").val();
    var newContent = $("#content").val();
    var newPostObj = {title: newTitle, content: newContent};
  }
});

module.exports = AddPost;