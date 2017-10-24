var VideoListView = Backbone.View.extend({

  initialize: function(videos) {
    // console.log (videos);
    // this.collection = videos;
    // this.listenTo (this.model, 'change', this.render);
    this.render();
  },
  
  render: function() {
    
    
    // console.log('collection :', this.collection);
    this.$el.children().detach();
    $('.list').html(this.$el.html(this.template()));
    
    
    _.each(this.collection.models, function(element, index) {
      // console.log('element', element);
      var htmlID = 'video' + (index + 1);
      new VideoListEntryView({model: element, id: htmlID});
    });
    // this.$el.html(this.template());
    
    // for (var i = 1; i < 6; i++) {
    //   // this.$el.$(`#video${i}`).html
    //   //new element but we passing in an HTML ID
    // }
    
    
    // console.log('this videolistvIEW', this);
    // console.log('this collection', this.collection)
    // console.log ('template', this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html'),
  
  renderVideo: function (movie) {
    var Video = new VideoListView ({model: video});
    this.$el.append(Video.render());  
  }

});

