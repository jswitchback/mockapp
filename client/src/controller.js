var Marionette = require('backbone.marionette'),
    ContactsView = require('./views/contacts'),
    ContactDetailsView = require('./views/contact_details'),
    AddContactView = require('./views/add'),
    // matchupView = require('./views/matchup'),
    TeamAListView = require('./views/team_list_a'),
    TeamBListView = require('./views/team_list_b'),
    StatCategoriesView = require('./views/stat_categories'),
    StatCategoriesModel = require('./models/stat_categories'),
    TeamModelCollection = require('./collections/teams'),
    ActiveTeamModelCollection = require('./collections/active_teams'),
    TeamAScoresView = require('./views/team_scores_a'),
    TeamBScoresView = require('./views/team_scores_b'),
    ActiveWeekView = require('./views/active_week'),
    ScoresTotal = require('./views/matchup_total');


module.exports = Controller = Marionette.Controller.extend({
    initialize: function() {
        App.core.vent.trigger('app:log', 'Controller: Initializing');
        window.App.views.contactsView = new ContactsView({ collection: window.App.data.contacts });
    },

    home: function() {
        App.core.vent.trigger('app:log', 'Controller: "Home" route hit.');
        var view = window.App.views.contactsView;
        this.renderView(view);
        window.App.router.navigate('#');
    },

    details: function(id) {
        App.core.vent.trigger('app:log', 'Controller: "Contact Details" route hit.');
        var view = new ContactDetailsView({ model: window.App.data.contacts.get(id)});
        this.renderView(view);
        window.App.router.navigate('details/' + id);
    },

    add: function() {
        App.core.vent.trigger('app:log', 'Controller: "Add Contact" route hit.');
        var view = new AddContactView();
        this.renderView(view);
        window.App.router.navigate('add');
    },

    matchup: function() {
        App.core.vent.trigger('app:log', 'Controller: "Matchup" route hit.');

        ////////////////////////
        // Team List
        ////////////////////////

        var teamsCollection = new TeamModelCollection(this.parseDataToTeamModelArray(dataLeagueScoreboard)),
            teamAListView = new TeamAListView({collection: teamsCollection}),
            teamBListView = new TeamBListView({collection: teamsCollection});

        this.renderView(teamAListView);
        this.renderView(teamBListView);


        ////////////////////////
        // Stat Category List
        ////////////////////////

        var statCategories = this.parseToStatCategoriesModel(dataLeagueSettings);
        var statCategoriesView = new StatCategoriesView({model: statCategories});

        this.renderView(statCategoriesView);

        ////////////////////////
        // Team Scores
        ////////////////////////

        //  activeTeamsCollection = new ActiveTeamModelCollection([teamCollection.findWhere({matchup1:true}), teamsCollection.findWhere({matchup2:true}));
        var activeTeamsCollection = new ActiveTeamModelCollection([teamsCollection.at(0), teamsCollection.at(1)]),
            teamAScoresView = new TeamBScoresView({collection: activeTeamsCollection}),
            teamBScoresView = new TeamAScoresView({collection: activeTeamsCollection});

        this.renderView(teamAScoresView);
        this.renderView(teamBScoresView);

        this.calculateWinner();

        ////////////////////////
        // Matchup Total
        ////////////////////////

        var scoresTotal = new ScoresTotal({collection: activeTeamsCollection});

        this.renderView(scoresTotal);

        ////////////////////////
        // Active Week
        ////////////////////////

        var activeWeekView = new ActiveWeekView ({collection: teamsCollection});
        
        this.renderView(activeWeekView);


        window.App.router.navigate('matchup');
    },

    renderView: function(view) {
        //this.destroyCurrentView(view);
        App.core.vent.trigger('app:log', 'Controller: Rendering new view.');

        $('#app-main').html(view.render());
        // ".el" throws error
        // $('#app-main').html(view.render().el);

    },

    destroyCurrentView: function(view) {
        if (!_.isUndefined(window.App.views.currentView)) {
            App.core.vent.trigger('app:log', 'Controller: Destroying existing view.');
            window.App.views.currentView.close();
        }
        window.App.views.currentView = view;
    },

    // Parses league.scoreboard object to Team Model Collection
    parseDataToTeamModelArray : function(scoreboardObject) {
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
    },

    // Parses league.settings object to Stat Categories Model
    parseToStatCategoriesModel : function(statCategoriesObject) {
    var statCategoriesObject = statCategoriesObject.query.results.league.settings.stat_categories.stats.stat;

        return new StatCategoriesModel({'stats': statCategoriesObject});
    },

    calculateWinner: function() {

        var scoresAArray = $('#scores-a .score'),
            scoresBArray = $('#scores-b .score'),
            self = this;

        // Loop team objects array
        _.each(scoresAArray, function(team, index, list) {

            self.calculateWinningScore($(scoresAArray[index]), $(scoresBArray[index]), true);

        });

    },

    calculateWinningScore : function($scoreA, $scoreB, highestWins) {
      scoreA = parseFloat($scoreA.text());
      scoreB = parseFloat($scoreB.text());

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
    },

    resetTeamsCollection : function(collection, newDataLeagueScoreboard) {
        // @TODO Get new data from server & reset a collection array
        newTeamModelsArray = this.parseDataToTeamModelArray(newDataLeagueScoreboard);
        collection.reset(newTeamModelsArray);
        shout('collection has been swapped');
        // return;
    }

});

///////////////////////////////////
// Change scores on click of team
///////////////////////////////////
// $('#team-list-a').on('click', '.team', function(event){

//     var $this = $(this),
//             teamIndex = $( "#team-list-a .team" ).index( $this ),
//             oldActiveModel = activeTeamsCollection.at(0);
//             newActiveModel = teamsCollection.at(teamIndex);

//     // // @ TODO: do we need this ... Deprecated way to determine active team
//     // // Loop team collection setting all active attributes to false
//     // _.each(activeTeamsCollection.models, function(model, index, list) {
//     //  model.set('matchup1', false);
//     // });

//     // Deprecated way to determine active team
//     // oldActiveModel.set('matchup1', false);
//     // newActiveModel.set('matchup1', true);

//     $('#team-list-a .team').removeClass('active');
//     $this.addClass('active');

//     // Only remove model of there are two. One model indicates we're comparing the same team to itself
//     if (activeTeamsCollection.at(1)) {activeTeamsCollection.remove(oldActiveModel);}
//     activeTeamsCollection.add(newActiveModel,{at: 0});

//     // Triggers score view rendering
//     activeTeamsCollection.triggerTeamAChange();
    
//     event.preventDefault;
// });

// $('#team-list-b').on('click', '.team', function(event){

//     var $this = $(this),
//             teamIndex = $( "#team-list-b .team" ).index( $this ),
//             oldActiveModel = activeTeamsCollection.at(1);
//             newActiveModel = teamsCollection.at(teamIndex);

//     // // @ TODO: do we need this ... Deprecated way to determine active team
//     // // Loop team collection setting all active attributes to false
//     // _.each(activeTeamsCollection.models, function(model, index, list) {
//     //  model.set('matchup2', false);
//     // });
//     // Deprecated way to determine active team
//     // oldActiveModel.set('matchup2', false);
//     // newActiveModel.set('matchup2', true);

//     $('#team-list-b .team').removeClass('active');
//     $this.addClass('active');

//     // Deprecated way to determine active team
//     if (oldActiveModel) {oldActiveModel.set('matchup1', false);}
//     newActiveModel.set('matchup2', true);

//     activeTeamsCollection.remove(oldActiveModel);
//     activeTeamsCollection.add(newActiveModel,{at: 1});

//     // Triggers score view rendering
//     activeTeamsCollection.triggerTeamBChange();
    
//     event.preventDefault;
// });

            
// // @TODO fake active team on page load. Get from url
// // $('#team-list-b .team:eq(1)').click();
// // $('#team-list-a .team:eq(0)').click();







