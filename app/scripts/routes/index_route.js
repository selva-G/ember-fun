Blogger.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('posts');
  }
});


Blogger.PostsRoute = Ember.Route.extend({
  model: function() {
    return Blogger.Post.find();
  },
  setupController: function(controller,model){
    this._super(controller,model);
  },

  renderTemplate: function(){
    this.render('posts_lhs',{into: 'application', outlet: 'LHS'});
    this.render('posts_rhs', {into: 'application', outlet: 'RHS'});
  }
});

Blogger.PostRoute = Ember.Route.extend({
  model: function(model){
    return Blogger.Post.find(model.id);
  },
  serialize: function(model){
    return {id: model.id};
  },
  renderTemplate: function(){
    this.render({into: 'application', outlet: 'details'});
  }
});
