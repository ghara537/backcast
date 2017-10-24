var VideoListView = Backbone.View.extend({

  initialize: function(videos) {
    // console.log (videos);
    this.collection = videos;
    // this.listenTo (this.model, 'change', this.render);
    this.render();
  },
  
  render: function() {
    console.log('collection :', this.collection);
    _.each(this.collection, function(element) {
      console.log('element', element);
      new VideoListEntryView(element);
    });
    this.$el.children().detach();
    this.$el.html(this.template());
    // console.log('this videolistvIEW', this);
    // console.log('this collection', this.collection)
    // console.log ('template', this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html'),
  
  renderVideo: function (movie) {
    var movieView = new VideoListView ({model: video});
    this.$el.append(Video.render());  
  }

});

