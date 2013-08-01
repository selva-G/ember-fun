Blogger.Post = Ember.Model.extend({
    description : Ember.attr()
});

Blogger.Post.adapter = Ember.FixtureAdapter.create();

Blogger.Post.FIXTURES = [
    { id: '1', description: 'post1' },
    { id: '2', description: 'post2' },
    { id: '3', description: 'post3' }
];
