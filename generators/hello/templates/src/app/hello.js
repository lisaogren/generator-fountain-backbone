var _ = require('underscore');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  template: _.template('<h1>Hello <%%= name %>!</h1>'),
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
