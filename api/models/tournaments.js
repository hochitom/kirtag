'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamps');
var slugify = require('mongoose-slugify');

var Tournaments = new Schema({
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

Tournaments.plugin(timestamp);
Tournaments.plugin(slugify, {
    prop: 'title',
    index: true
});

module.exports = mongoose.model('Tournaments', Tournaments)
