var Blogger = window.Blogger = Ember.Application.create({
    LOG_BINDINGS                  : true,
    LOG_TRANSITIONS               : true,
    LOG_TRANSITIONS_INTERNAL      : true,
    LOG_VIEW_LOOKUPS              : true,
    LOG_ACTIVE_GENERATION         : true
});


/* Order and include as you please. */
require('scripts/routes/*');
require('scripts/models/*');
require('scripts/controllers/*');
require('scripts/views/*');
require('scripts/router');
