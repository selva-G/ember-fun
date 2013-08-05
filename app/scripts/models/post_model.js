Blogger.Post = Ember.Model.extend({
    description : Ember.attr(),
    date: Ember.attr(Date),
    name: Ember.attr()
});

Blogger.Post.adapter = Ember.FixtureAdapter.create();

Blogger.Post.FIXTURES = [
    { id: '12',name:'Post12', description: 'This is post12 description', date: '2013-06-01' },
    { id: '11',name:'Post11', description: 'This is post11 description', date: '2013-07-01' },
    { id: '10',name:'Post10', description: 'This is post10 description', date: '2013-07-03' },
    { id: '9',name:'Post9', description: 'This is post9 description', date: '2013-04-23' },
    { id: '8',name:'Post8', description: 'This is post8 description', date: '2013-03-30' },
    { id: '7',name:'Post7', description: 'This is post7 description', date: '2013-02-03' },
    { id: '6',name:'Post6', description: 'This is post6 description', date: '2012-07-01' },
    { id: '5',name:'Post5', description: 'This is post5 description', date: '2012-07-01' },
    { id: '4',name:'Post4', description: 'This is post4 description', date: '2012-02-03' },
    { id: '3',name:'Post3', description: 'This is post3 description', date: '2012-02-23' },
    { id: '2',name:'Post2', description: 'This is post2 description', date: '2012-02-30' },
    { id: '1',name:'Post1', description: 'This is post1 description', date: '2012-01-03' }
];
