var Videos = Backbone.Collection.extend({

  model: Video,
  initialize: function (collection) {

    // this.on ('add', function (video) { 
    // });

    // this.add(exampleVideoData);
    // this.add(collection);
    var currentThis = this;
    this.search('hello');
    console.log('searching in Videos');
    // this.listenTo(searchBar, 'search', function (data) {
    //   console.log ('searched!!!');
    //   currentThis.search(data);
    // }, currentThis);
  },
  
  getVideos: function(searchInput) {

  },

    
  parse: function(data) {
    return data.items;
  }, 
  
  search: function (searchInput) {
        
    var data = {
      maxResults: 5,
      part: 'snippet',
      q: searchInput,
    };
    
    // $.ajax({
    //   type: 'GET',
    //   url: 'https://www.googleapis.com/youtube/v3/search',
    //   key: window.YOUTUBE_API_KEY,
    //   data: data, 
    //   success: function (fromServerData) {
    //     console.log ('success: ', fromServerData);
    //   },
    //   error: function (errorData) {
    //     console.error ('error: ', errorData);
    //   }
    // });
   
    console.log (window.YOUTUBE_API_KEY);
    this.fetch({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      key: window.YOUTUBE_API_KEY,
      data: data, 
      success: function (fromServerData) {
        console.log ('success: ', fromServerData);
      },
      error: function (errorData) {
        console.error ('fetch error: ', errorData);
      }
    });
    
    // $.get('https://www.youtube/v3/search', data, function(fromServerData) {
    //   console.log('short success', fromServerData);
    // });
  }

});

  