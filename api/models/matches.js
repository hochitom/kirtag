'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var troop = require('mongoose-troop');

var Matches = new Schema({
    slug: {
        index: true,
        type: String,
        unique: true
    },
    title: {
        type: String,
        required: true
    }
});

Matches.plugin(troop.timestamp);
Matches.plugin(troop.slugify);

module.exports = mongoose.model('Matches', Matches)
