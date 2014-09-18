var Marionette = require('backbone.marionette');

module.exports = TeamAListView = Marionette.ItemView.extend({

	// Render target
	el: '#team-list-a',

	initialize: function() {
		this.listenTo(this.collection, 'reset', this.render);
	},

	// Render View
	render: function() {
		var html = '';

		// Loop team collection with Underscore each function
		_.each(this.collection.models, function(model, index, list) {
			// shout(model);
			var item_html = '<img src="' + model.get('yahooData.team_logos.team_logo.url') + '" />' +
											'<h2>' + model.get('yahooData.name') + '</h2>';
			html = html + '<li><a class="team" href="#" data-team-key="' + model.get('yahooData.team_key') + '" data-team-id="' + model.get('yahooData.team_id') + '">' + item_html + '</a></li>';
		});

		this.$el.html('<ul class="teams">' + html + '</ul>');
	},

});
