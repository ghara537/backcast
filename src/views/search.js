var SearchView = Backbone.View.extend({
  
  initialize: function(videos) {
    this.render();
    var currentThis = this;
    $('.btn').on('click', function() {
    
      var searchInput = $('.form-control').val();
      console.log('search', searchInput);
      // currentThis.searchReq(searchInput);
      currentThis.trigger('search', searchInput);
    });
  },

  render: function() {
    var currentHTML = this.$el.html(this.template());
    $('.search').html(currentHTML);
    return this;
  },

  template: templateURL('src/templates/search.html'),
  
  // searchReq: function(searchInput) {

  //   var data = {
  //     maxResults: 5,
  //     part: 'snippet',
  //     q: searchInput,
  //   };
    
  //   this.fetch({
  //     type: 'GET',
  //     URL: 'https://www.googleapis.com/youtube/v3/search',
  //     key: window.YOUTUBE_API_KEY,
  //     data: data, 
  //     success: function (fromServerData) {
  //       console.log ('success: ', fromServerData);
  //     },
  //     error: function (errorData) {
  //       console.error ('error: ', errorData);
  //     }
  //   });
    
  //   $.get('https://www.youtube/v3/search', data, function(fromServerData) {
  //     console.log('short success', fromServerData);
  //   });
    
  // },
    
  parse: function(data) {
    return data.items;
  }

});
