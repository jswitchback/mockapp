var Marionette = require('backbone.marionette');

module.exports = TeamAScoresView = Marionette.ItemView.extend({

	// Render target
	el: '#scores-a',

	initialize: function() {
		// @TODO reset on teamCollection change?
		// this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'teamAChanged', this.render);
	},

	// Render View
	render: function() {
		var html = '',
				stats = this.collection.at(0).get('yahooData.team_stats.stats.stat');

		_.each(stats, function(stat, index, list) {
			html = html + '<li data-stat-id="' + stat.stat_id + '" class="score">' + stat.value + '</li>';
		});

		this.$el.html('<ul class="scores">' + html + '</ul>');
	}

});