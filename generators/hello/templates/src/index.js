var Backbone = require('backbone');

var Hello = require('./app/hello');

require('./index.<%- css %>');

var world = new Backbone.Model({name: 'world'});

var helloView = new Hello({model: world});

helloView.render();
