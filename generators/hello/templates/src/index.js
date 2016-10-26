var $ = require('jquery');
var Backbone = require('backbone');

var Hello = require('./app/hello');

var world = new Backbone.Model({ name: 'world' });

var helloView = new Hello({ model: world });

$('#root').append(helloView.render().el);
