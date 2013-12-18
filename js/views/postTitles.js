var PostTitles = Backbone.View.extend({
  el: '#postTitles',

  template: require('../../templates/postTitles.hbs'),

  initialize: function () {
    this.listenTo(this.collection, 'add', this.render)
    this.listenTo(this.collection, 'remove', this.render)
  },

  render: function () {
    var self = this;

    this.$el.empty();

    this.collection.each(function (post) {
      var $postTitle = $(self.template(post.toJSON()));
      
      $postTitle.click(function () {
        if (post.get('display') === true) {
          post.set('display', false)
        } else {
          post.set('display', true)
        }
      });

      self.$el.append($postTitle);
    });

    return this;
  }
})

module.exports = PostTitles;