Blogger.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('posts');
  }
});


Blogger.PostsRoute = Ember.Route.extend({
  model: function() {
    return Blogger.Post.find();
  }
});

Blogger.PostRoute = Ember.Route.extend({
  model: function(model){
    return Blogger.Post.find(model.id);
  },
  serialize: function(model){
    return {id: model.id};
  }
});
