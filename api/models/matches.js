'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamps');
var slugify = require('mongoose-slugify');

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

Matches.plugin(timestamp);
Matches.plugin(slugify, {
    prop: 'title',
    index: true
});

module.exports = mongoose.model('Matches', Matches)
