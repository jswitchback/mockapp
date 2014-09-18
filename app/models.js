var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Contact = new Schema({
    email:      { type: String },
    name: {
        first:  { type: String },
        last:   { type: String }
    },
    phone:      { type: String },
    gravatar:   { type: String }
});

var UserData = new Schema({
    id:      { type: String },
    username: { type: String },
    leagueScoreboard: { type: Object },
    leagueSettings: { type: Object }
});

module.exports = {
    Contact: mongoose.model('Contact', Contact),
    UserData: mongoose.model('UserData', UserData)
};