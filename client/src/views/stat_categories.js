var Marionette = require('backbone.marionette');

module.exports = StatCategoriesView = Marionette.ItemView.extend({

	// Render target
	el: '#stat-categories',

	// Render View
	render: function() {

		var html = '';

		_.each(this.model.get('stats'), function(stats, index, list) {
			// shout(stats);
			// shout(stats.display_name);

			var item_html = '<span title="' + stats.name + '">' + stats.display_name + '</span>';

			html = html + '<li data-stat-id="' + stats.stat_id + '" class="category">' + item_html + '</li>';
		});

		this.$el.html('<ul class="categories">' + html + '</ul>');
	}

});