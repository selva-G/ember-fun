


Blogger.BlogArchiveComponent = Ember.Component.extend({

 months: ['January','Feburary','March','April','May','June','July','August','September','October','November','December'],


 archives: function(){
    var content = this.get('content.content'),
        tempMonth,
        tempYear,
        yearArray = Em.A(),
        monthArray,monthObj,yearObj,
        self = this;

    if(Em.isArray(content)){

    return content.map(function(itm,idx){
      var date = itm.get('date'),
        year = date.getFullYear(),
        month = date.getMonth();

      if(year !== tempYear)
        monthArray = Em.A();

      if(month !== tempMonth){
        tempMonth = month;
        monthObj = Em.Object.create();
        monthObj.set('key',self.get('months')[month]);
        monthObj.set('value',Em.A());
        monthArray.pushObject(monthObj);
      }

      monthObj.get('value').pushObject(itm);

      if(year !== tempYear){
        tempYear = year;
        yearObj = Em.Object.create();
        yearObj.set('key',year);
        yearObj.set('value',monthArray);
        return yearObj;
      }
    }).compact();
    }
  }.property('content.length')

});



Blogger.YearItemController = Ember.ObjectController.extend({
  isExpanded: false,
  totalYearPosts: function(){
    var totalPosts = 0;
    this.get('content.value').forEach(function(post,idx){
      totalPosts += post.get('value.length');
    });
    return totalPosts;
  }.property()
});

Blogger.MonthItemController = Ember.ObjectController.extend({
  isExpanded: false
});

