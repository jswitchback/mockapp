var Backbone = require('backbone'),
    TeamModel = require('../models/team');


module.exports = TeamModelCollection = Backbone.Collection.extend({
		model: TeamModel
});

// Get teams from collections array with at(index) method
// var teamA = teamModelCollection.at(0);
// var teamB = teamModelCollection.at(1);

// Use get method for attributes
// var teamBusename = teamModelCollection.at(1).get('userName');

// teamModelCollection.reset() clears models from collections. Pass in model array to swap out

