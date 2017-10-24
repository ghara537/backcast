var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // this.videos = new Videos(this.collection);
    // this.render();
    // var videoPlayer = new VideoPlayerView();
    // var thestVideos = new VideoListView(window.exampleVideoData);
    
    this.videos = new Videos(window.exampleVideoData);
    // console.log (this.videos);
    this.render();
    // console.log('video 1', this.videos.models[0]);
    // var videoPlayer = new VideoPlayerView({collection: this.videos}); //pass in a collection of videos
    // var videoPlayer = new VideoPlayerView({model: this.videos.models[0]}); //pass in a single video
    console.log (this.videos.models[0]);
    var videoPlayer = new VideoPlayerView({model: this.videos.models[0]}); //pass in a single video
    var groupofVideos = new VideoListView({collection: this.videos});
    var searchBar = new SearchView ();
    
    this.listenTo(this.videos, 'select', function (video) {
      console.log('listener', video);
      console.log ('video from listerner', video)
      videoPlayer.render(video);
      /// update the video player;
    });

  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html'),
  
  videoSelect: function(video) {
    console.log(this.model.attributes);
  }

});
