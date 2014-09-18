// var Marionette = require('backbone.marionette');

var ScoresTotal = Backbone.View.extend({
	// Render target
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

// var TeamAListView = Backbone.View.extend({
// 	// Render target
// 	el: '#team-list-a',

// 	// Render View
// 	render: function() {
// 		var html = '';

// 		// Loop team collection with Underscore each function
// 		_.each(this.collection.models, function(model, index, list) {
// 			var item_html = '<img src="' + model.get('yahooData.team_logos.team_logo.url') + '" />' +
// 											'<h2>' + model.get('yahooData.name') + '</h2>';
// 			html = html + '<li><a class="team" href="#" data-team-key="' + model.get('yahooData.team_key') + '" data-team-id="' + model.get('yahooData.team_id') + '">' + item_html + '</a></li>';
// 		});

// 		this.$el.html('<ul class="teams">' + html + '</ul>');
// 	},

// 	initialize: function() {
// 		this.listenTo(this.collection, 'reset', this.render);
// 	}

// });

var TeamAScoresView = Backbone.View.extend({
	// Render target
	el: '#scores-a',

	// Render View
	render: function() {
		var html = '',
				stats = this.collection.at(0).get('yahooData.team_stats.stats.stat');

		_.each(stats, function(stat, index, list) {
			html = html + '<li data-stat-id="' + stat.stat_id + '" class="score">' + stat.value + '</li>';
		});

		this.$el.html('<ul class="scores">' + html + '</ul>');
		this.calculateWinner();
	},

	calculateWinner: function() {

		scoresAArray = $('#scores-a .score');
		scoresBArray = $('#scores-b .score');

		// Loop team objects array
		_.each(scoresAArray, function(team, index, list) {

			calculateWinningScore($(scoresAArray[index]), $(scoresBArray[index]), true);

		});

	},

	initialize: function() {
		// @TODO reset on teamCollection change?
		// this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'teamAChanged', this.render);
	}

});

var StatCategoriesView = Backbone.View.extend({
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

var ActiveWeekView = Backbone.View.extend({
	// Render target
	el: '#week',

	// Render View
	render: function() {
		// Get first model in Collection to check week
		// shout(this.collection);

		var html = '<h2><span class="label">Week </span><span class="week">' + this.collection.models[0].get('yahooData.team_stats.week') + '</span></h2>';

		this.$el.html(html);
	}

});


// var TeamBListView = Backbone.View.extend({
// 	// Render target
// 	el: '#team-list-b',

// 	// Render View
// 	render: function() {
// 		var html = '';

// 		// Loop team collection with Underscore each function
// 		_.each(this.collection.models, function(model, index, list) {
// 			var item_html = '<img src="' + model.get('yahooData.team_logos.team_logo.url') + '" />' +
// 											'<h2>' + model.get('yahooData.name') + '</h2>';
// 			html = html + '<li><a class="team" href="#" data-team-key="' + model.get('yahooData.team_key') + '" data-team-id="' + model.get('yahooData.team_id') + '">' + item_html + '</a></li>';

// 		});

// 		this.$el.html('<ul class="teams">' + html + '</ul>');

// 	},

// 	initialize: function() {
// 		this.listenTo(this.collection, 'reset', this.render);
// 	}

// });

var TeamBScoresView = Backbone.View.extend({
	// Render target
	el: '#scores-b',

	// Render View
	render: function() {
		var html = '',
				activeModelB = this.collection.at(1), // May be undefined if user compares the same teams
				stats = activeModelB ? this.collection.at(1).get('yahooData.team_stats.stats.stat') : this.collection.at(0).get('yahooData.team_stats.stats.stat');

		_.each(stats, function(stat, index, list) {
			html = html + '<li data-stat-id="' + stat.stat_id + '" class="score">' + stat.value + '</li>';
		});

		this.$el.html('<ul class="scores">' + html + '</ul>');
		this.calculateWinner();

	},

	initialize: function() {
		// @TODO reset on teamCollection change?
		// this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'teamBChanged', this.render);
	},

	calculateWinner: function() {

		scoresAArray = $('#scores-a .score');
		scoresBArray = $('#scores-b .score');

		// Loop team objects array
		_.each(scoresAArray, function(team, index, list) {
			calculateWinningScore($(scoresAArray[index]), $(scoresBArray[index]), true);
		});

	},

});


// var Team2ScoresView = Backbone.View.extend({
// 	// Render target
// 	el: '#scores-b',

// 	// Render View
// 	render: function() {
// 		var html = '';
// 		//shout(this.collection);

// 		var activeModel = this.collection.findWhere({matchup2:true});

// 		if (activeModel) {
// 			var stats = activeModel.get('yahooData.team_stats.stats.stat');

// 			_.each(stats, function(stat, index, list) {
// 				html = html + '<li data-stat-id="' + stat.stat_id + '" class="score">' + stat.value + '</li>';
// 			});
// 		} else {
// 			shout('Active team not found.');
// 			$('#team-list-b .team:eq(1)').click();
// 			$('#team-list-a .team:eq(0)').click();
// 		}

// 		this.$el.html('<ul class="scores">' + html + '</ul>');
// 		this.calculateWinner();

// 	},

// 	initialize: function() {
// 		this.listenTo(this.collection, 'reset', this.render);
// 	},

// 	calculateWinner: function() {

// 		scoresAArray = $('#scores-a .score');
// 		scoresBArray = $('#scores-b .score');

// 		// Loop team objects array
// 		_.each(scoresAArray, function(team, index, list) {

// 			calculateWinningScore($(scoresAArray[index]), $(scoresBArray[index]), true);

// 		});

// 	},

// });

// Parses league.scoreboard object to Team Model Collection
function parseDataToTeamModelArray(scoreboardObject) {
	var matchupsObj = scoreboardObject.query.results.league.scoreboard.matchups.matchup,
			teamArray = [];

	// @TODO - ERROR - Throw error if not a compatible league type
	if (scoreboardObject.query.results.league.scoring_type !== "head") {
		shout('Failed to parse scoring data. Your league must be of type head-to-head.');
		return false;
	}

	// Loop matchups
	for (var key in matchupsObj) {
		var matchup = matchupsObj[key],
				teams = matchup.teams.team;

		// Loop teams
		for (var key in teams) {
			var team = teams[key];
			// shout(team);

			// Add team to collection array
			teamArray.push(new TeamModel({yahooData: team}));
		}
	}
	return teamArray;
}


// Parses league.scoreboard object to Team Model Collection
// function parseToTeamCollection(scoreboardObject) {
// 	var matchupsObj = scoreboardObject.query.results.league.scoreboard.matchups.matchup,
// 			teamArray = [];

// 	// @TODO - ERROR - Throw error if not a compatible league type
// 	if (scoreboardObject.query.results.league.scoring_type !== "head") {
// 		shout('Failed to parse scoring data. Your league must be Head-to-head.');
// 		return false;
// 	}

// 	// Loop matchups
// 	for (var key in matchupsObj) {
// 		var matchup = matchupsObj[key],
// 				teams = matchup.teams.team;

// 		// Loop teams
// 		for (var key in teams) {
// 			var team = teams[key];
// 			// shout(team);

// 			// Add team to collection array
// 			teamArray.push(new TeamModel(team));
// 		}
// 	}
	
// 	return new TeamModelCollection(teamArray);
// }

// Parses league.settings object to Stat Categories Model
function parseToStatCategoriesModel(statCategoriesObject) {
	var statCategoriesObject = statCategoriesObject.query.results.league.settings.stat_categories.stats.stat;

	return new StatCategoriesModel({'stats': statCategoriesObject});
}

function resetTeamsCollection(collection, newDataLeagueScoreboard) {
	// @TODO Get new data from server & reset a collection array

	newTeamModelsArray = parseDataToTeamModelArray(newDataLeagueScoreboard);
	collection.reset(newTeamModelsArray);
	shout('collection has been swapped');
	return
}


function calculateWinningScore($scoreA, $scoreB, highestWins) {
	scoreA = parseFloat($scoreA.text());
	scoreB = parseFloat($scoreB.text());

	// shout("scoreA:   "+ scoreA + "  scoreB:    " + scoreB);		
	$scoreA.removeClass('tied winner');
	$scoreB.removeClass('tied winner');

	if (scoreA > scoreB) {

		if (highestWins) {
      $scoreA.addClass('winner');
    } else {
      $scoreB.addClass('winner');
    }

	} else if (scoreA < scoreB) {
		if (highestWins) {
      $scoreB.addClass('winner');
    } else {
      $scoreA.addClass('winner');
    }
	} else {
    // Assume they are equal
    $scoreA.addClass('tied');
    $scoreB.addClass('tied');
	}
}


