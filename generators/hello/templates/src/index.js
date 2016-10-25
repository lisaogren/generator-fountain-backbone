var Backbone = require('backbone');

var Hello = require('./app/hello');

var world = new Backbone.Model({
  name: 'world'
});

var helloView = new Hello({ model: world });

document.appendChild(helloView.el);
