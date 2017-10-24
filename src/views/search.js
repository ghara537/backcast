var SearchView = Backbone.View.extend({
  
  initialize: function(videos) {
    this.render();
  },

  render: function() {
    var currentHTML = this.$el.html(this.template());
    $('.search').html(currentHTML);
    return this;
  },

  template: templateURL('src/templates/search.html')

});
