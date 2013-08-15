
Blogger.GravatarImageComponent = Ember.Component.extend({
  gravatarUrl: function(){
    return "http://www.gravatar.com/avatar/"+MD5(this.get('email'))+"&s=200";
  }.property('email')
});
