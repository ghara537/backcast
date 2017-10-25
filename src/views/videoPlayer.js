var VideoPlayerView = Backbone.View.extend({
  initialize: function() { 
    this.render();
  },

  render: function(video) {
    if (video) { //rerender with single vide
      // console.log ('test', video);
      var firstVid = video;
      var data = video.attributes;
      // console.log ('firstVid', firstVid)
      // console.log ('data', data)
      
    } else if (this.collection) { //initialzie with a collection
      var firstVid = this.collection.models[0];
      var data = this.collection.models[0].attributes;
      // var data = this.model.attributes; // for when we had 1 video input to VideoPlayerView
      // console.log('id', data.id ); //<%=data.id%>
      
    } else {  //initialize with a single video
      // console.log('multiview triggering');
      //Assumes a single video input
      var firstVid = this.model;
      var data = this.model.attributes;
      // console.log ('firstVid', firstVid)
      // console.log ('data', data)
      
    }
    var htmlString = `
      <div class="video-player">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${data.id}" allowFullScreen></iframe>
        </div>
        <div class="video-player-details">
          <h3>${data.snippet.title}</h3>
          <div>${data.snippet.description}</div>
        </div>
      </div>
      `;
      
    this.$el.html('<div class="loading">Please wait...</div>');
    $('.player').html(this.$el.html(htmlString));
    return this;
    
  },

  template: templateURL('src/templates/videoPlayer.html')

});