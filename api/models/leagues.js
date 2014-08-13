'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var troop = require('mongoose-troop');

var Leagues = new Schema({
    slug: {
        index: true,
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
});

Leagues.plugin(troop.timestamp);
Leagues.plugin(troop.slugify);

module.exports = mongoose.model('Leagues', Leagues)
