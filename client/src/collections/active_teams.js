var Backbone = require('backbone'),
    TeamModel = require('../models/team');

module.exports = ActiveTeamModelCollection = Backbone.Collection.extend({

	model: TeamModel,
	triggerTeamAChange: function() {
		// Use to trigger matchup score change
		this.trigger('teamAChanged');
	},
	triggerTeamBChange: function() {
		// Use to trigger matchup score change
		this.trigger('teamBChanged');
	}

});