var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(this.collection);
    this.render();
    var videoPlayer = new VideoPlayerView();
    var thestVideos = new VideoListView(window.exampleVideoData);


  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
