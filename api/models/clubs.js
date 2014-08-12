'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var generateSlug = require('mongoose-slugs');
var timestamps = require('mongoose-timestamps');

var Clubs = new Schema({
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

Clubs.plugin(timestamps);

Clubs
    .pre('validate', generateSlug('Clubs', 'title', 'slug'));

module.exports = mongoose.model('Clubs', Clubs)
