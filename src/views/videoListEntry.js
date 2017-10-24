var VideoListEntryView = Backbone.View.extend({
  
  initialize: function(video) {
    this.video = video;
    this.htmlString;
    // console.log('VLEV INIT', this);
    this.render();
    var currentThis = this;
    
    var data = this.model.attributes;
    $('.' + data.id).on('click', function() {
      // AppView.videoSelect(currentThis);
      currentThis.model.select();
      // AppView.videoSelect(currentThis);
    });
    
  },

  render: function() {
    // debugger;
    var data = this.model.attributes;
    var snippet = this.model.attributes.snippet;
    htmlString = ' \
      <div class="video-list-entry media"> \
        <div class="media-left"> \
          <img class="media-object" src="' + snippet.thumbnails.default.url + '" /> \
        </div> \
        <div class="media-body"> \
          <div class="' + data.id + '">' + snippet.title + '</div> \
          <div class="video-list-entry-detail">' + snippet.description + '</div> \
        </div> \
      </div> \
      ';
    
    //es6
    // var htmlString2 = `
    //   <div class="video-list-entry media">
    //     <div class="media-left">
    //       <img class="media-object" src="${this.model.attributes.snippet.thumbnails.default.url}" />
    //     </div>
    //     <div class="media-body">
    //       <div class="video-list-entry-title">Video Title</div>
    //       <div class="video-list-entry-detail">Video Description</div>
    //     </div>
    //   </div>
    //   `;
      
      // console.log('htmlString1', htmlString1)
      // console.log('htmlString2', htmlString2)
  
      

    
    // console.log('videoListEntryView just this',this);
    // console.log('videoListEntryView',this.model.attributes);
    // console.log('html print', this.template(this.model.attributes));
    // this.$el.html(this.template(this));
    // console.log('$this', this);
    // console.log('$this attributes', this.model.attributes);
    // console.log($('#video1'));
    // cons
    // $('#' + this.id).html(this.$el.html(this.template(this.model.attributes)));
    $('#' + this.id).html(htmlString);
    // var temp = $('<span>Here I am </span>');
    // $('.videoList').append($('#' + this.id).html(temp));
    
    // console.log('element to append', this.$el.html(this.template(this.model.attributes)));
    // console.log (this.$el);
    
    
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
