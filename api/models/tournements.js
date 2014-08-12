'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var generateSlug = require('mongoose-slugs');
var timestamps = require('mongoose-timestamps');

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

Tournaments.plugin(timestamps);

Tournaments
    .pre('validate', generateSlug('Tournaments', 'title', 'slug'));

module.exports = mongoose.model('Tournaments', Tournaments)
