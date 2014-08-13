'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var troop = require('mongoose-troop');

var Tournaments = new Schema({
    slug: {
        index: true,
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

Tournaments.plugin(troop.timestamp);
Tournaments.plugin(troop.slugify);

module.exports = mongoose.model('Tournaments', Tournaments)