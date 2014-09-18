var Marionette = require('backbone.marionette');

module.exports = ActiveWeekView = Marionette.ItemView.extend({

	el: '#week',

	// Render View
	render: function() {
		// Get first model in Collection to check week
		// shout(this.collection);

		var html = '<h2><span class="label">Week </span><span class="week">' + this.collection.models[0].get('yahooData.team_stats.week') + '</span></h2>';

		this.$el.html(html);
	}

});