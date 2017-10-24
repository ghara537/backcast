var Videos = Backbone.Collection.extend({

  model: Video,
  initialize: function () {
    // this.on ('add', function (video) { 
    // });

    this.add(exampleVideoData);
  },

});

  