'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var generateSlug = require('mongoose-slugs');
var timestamps = require('mongoose-timestamps');

var Leagues = new Schema({
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

Leagues.plugin(timestamps);

Leagues
    .pre('validate', generateSlug('Leagues', 'title', 'slug'));

module.exports = mongoose.model('Leagues', Leagues)
