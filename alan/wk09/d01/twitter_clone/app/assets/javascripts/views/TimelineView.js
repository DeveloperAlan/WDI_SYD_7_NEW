var TwitterCloneApp = TwitterCloneApp || {};

TwitterCloneApp.TimelineView = Backbone.View.extend({
  tagName: "div",
  className: "timeline",

  // template: JST['statuses/timeline'], 

  initialize: function() {
    this.collection.on("add", this.addStatus, this);
    this.collection.on("reset", this.render, this)
  },

  render: function() {
    this.collection.each(this.addStatus, this);
  },

  // render: function() {
  //   this.$el.html(
  //     this.template({
  //       statuses: this.collection.toJSON()
  //     })
  //   );
  // }

  
  addStatus: function(status) {
      var statusView = new TwitterCloneApp.StatusView({ model: status});
      this.$el.append(statusView.render().el);
  }
  
});