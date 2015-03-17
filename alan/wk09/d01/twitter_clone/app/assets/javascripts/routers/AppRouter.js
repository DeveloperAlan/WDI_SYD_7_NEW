var TwitterCloneApp = TwitterCloneApp || {};

TwitterCloneApp.AppRouter = Backbone.Router.extend({
  statusesCollection: new TwitterCloneApp.Statuses(),

  openPage: function(url) {
    this.navigate(url, {trigger: true});
  },

  routes: {
    "": "home",
    "about": "aboutPage",
    ":username": "filterUser"
  },

  filterUser: function(username) {
    TwitterCloneApp.timelineView = new TwitterCloneApp.TimelineView({collection: this.statusesCollection});
    $("#container").html(TwitterCloneApp.timelineView.el);
    this.statusesCollection.filterByUser(username);
  },

  home: function() {
    TwitterCloneApp.timelineView = new TwitterCloneApp.TimelineView({collection: this.statusesCollection});
    $("body").append(TwitterCloneApp.timelineView.el);
    this.statusesCollection.fetch();
  },

  aboutPage: function() {
    $("#container").html(JST['about']());
  }
});