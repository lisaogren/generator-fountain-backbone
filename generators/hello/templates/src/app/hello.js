var _ = require('underscore');
var Marionette = require('backbone.marionette');

var helloTemplate = _.template('<h1>Hello <%%= name %>!</h1>');

module.exports = Marionette.View.extend({
  template: helloTemplate,
  el: '#root'
});
