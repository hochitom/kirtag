'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var troop = require('mongoose-troop');

var Clubs = new Schema({
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

Clubs.plugin(troop.timestamp);
Clubs.plugin(troop.slugify);

module.exports = mongoose.model('Clubs', Clubs)
