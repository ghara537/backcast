var VideoListEntryView = Backbone.View.extend({
  
  initialize: function(video) {
    this.video = video;
    console.log('VLEV INIT');
    this.render();
  },

  render: function() {
    
    // console.log('videoListEntryView just this',this);
    // console.log('videoListEntryView',this.model.attributes);
    // console.log('html print', this.template(this.model.attributes));
    this.$el.html(this.template(this));
    // this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
