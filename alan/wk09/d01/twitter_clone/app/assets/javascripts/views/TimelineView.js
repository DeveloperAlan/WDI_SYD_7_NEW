var TimelineView = Backbone.View.extend({
  tagName: "div",
  className: "timeline",

  // template: JST['statuses/timeline'], 

  initialize: function() {
    this.collection.fetch();
    this.collection.on("add", this.addStatus, this);
  },

  // render: function() {
  //   this.$el.html(
  //     this.template({
  //       statuses: this.collection.toJSON()
  //     })
  //   );
  // }

  
  addStatus: function(status) {
      var statusView = new StatusView({ model: status});
      this.$el.append(statusView.render().el);
  }
  
});