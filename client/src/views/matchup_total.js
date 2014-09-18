var Marionette = require('backbone.marionette');

module.exports = ScoresTotal = Marionette.ItemView.extend({
	
	el: '#score-totals',

	// Render View
	render: function() {
		var html = '',
				totalScoreA = 0,
				totalScoreB = 0;

		totalScoreA = $('#scores-a .winner').length;
		totalScoreB = $('#scores-b .winner').length;

		html = '<span class="total-score total-score-a">' + totalScoreA + '</span>';
		html =  html + '<span class="dash">-</span>';
		html = html + '<span class="total-score total-score-b">'  + totalScoreB  + '</span>';

		this.$el.html('<div class="teams">' + html + '</div>');
	},

	initialize: function() {
		this.listenTo(this.collection, 'teamAChanged', this.render);
		this.listenTo(this.collection, 'teamBChanged', this.render);
	}

});