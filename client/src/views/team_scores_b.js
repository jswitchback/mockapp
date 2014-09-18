var Marionette = require('backbone.marionette');

module.exports = TeamBScoresView = Marionette.ItemView.extend({

	// Render target
	el: '#scores-b',

	initialize: function() {
		// @TODO reset on teamCollection change?
		// this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'teamBChanged', this.render);
	},

	// Render View
	render: function() {
		var html = '',
				activeModelB = this.collection.at(1), // May be undefined if user compares the same teams
				stats = activeModelB ? this.collection.at(1).get('yahooData.team_stats.stats.stat') : this.collection.at(0).get('yahooData.team_stats.stats.stat');

		_.each(stats, function(stat, index, list) {
			html = html + '<li data-stat-id="' + stat.stat_id + '" class="score">' + stat.value + '</li>';
		});

		this.$el.html('<ul class="scores">' + html + '</ul>');

	}

});
