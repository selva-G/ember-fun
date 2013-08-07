
Blogger.PostsController = Ember.ArrayController.extend({

  recentPosts: function(){
    var content = this.get('content.content');
    if(!Em.isEmpty(content))
      return content.slice(0,5);
  }.property('content.length'),

  gravatarUrl: function(){
    return "http://www.gravatar.com/avatar/"+MD5('selvaganeshbsg@ymail.com')+"&s=200";
  }.property()

});


