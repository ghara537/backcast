var Videos = Backbone.Collection.extend({

  model: Video,
  initialize: function (collection) {

    // this.on ('add', function (video) { 
    // });

    // this.add(exampleVideoData);
    this.add(collection);
  },

});

  