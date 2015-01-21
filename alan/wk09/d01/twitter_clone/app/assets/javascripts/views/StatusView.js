var StatusView = Backbone.View.extend({
  tagName: "div",
  className: "status",
  template: JST['statuses/status'],

  initialize: function() {
    this.model.on("change", this.render, this);
    this.model.on("destroy", this.remove, this);
  },

  render: function() {
    this.$el.html(
      this.template(
        this.model.toJSON()
      )
    );
    return this;
  },

  remove: function() {
    this.$el.remove();
  }
});