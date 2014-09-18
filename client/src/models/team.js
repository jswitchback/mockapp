var Backbone = require('backbone');

// Inherits yahoos data structure
module.exports = TeamModel = Backbone.NestedModel.extend({

	defaults: {
		yahooData: {},
		matchup1: false,
		matchup2: false
	}
	
});

	//	YAHOO DATA STRUCTURE 
	//	clinched_playoffs: "1"
	//	managers: Object
	//		manager: Object
	//			guid: "--"
	//			manager_id: "12"
	//			nickname: "A Yahoo User"
	//	name: "Scratch 'n Spit"
	//	number_of_moves: "41"
	//	number_of_trades: "0"
	//	roster_adds: Object
	//	team_id: "2"
	//	team_key: "238.l.178574.t.2"
	//	team_logos: Object
	//	team_logo: Object
	//		size: "large"
	//		url: "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_2_lg.gif"
	//	team_points: Object
	//	team_stats: Object
	//		coverage_type: "week"
	//		stats: Object
	//			stat: Array[12]
	//				0: Object
	//					stat_id: "60"
	//					value: "93/438"
	//				1: Object
	//				2: Object
	//				3: Object
	//				4: Object
	//				5: Object
	//				6: Object
	//				7: Object
	//				8: Object
	//				9: Object
	//				10: Object
	//				11: Object
	//	url: "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178574/2"
	//	waiver_priority: "2"

	// Using Nested Models plugin ... https://github.com/afeld/backbone-nested
	// Change your getters and setters to not access nested attributes directly, e.g.
	// user.get('name').first = 'Bob';
	// // becomes
	// user.set({'name.first': 'Bob'});