'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var generateSlug = require('mongoose-slugs');

var Events = new Schema({
    slug: {
        index: true,
        type: String,
        required: true
    },
    date_start: {
        index: true,
        type: Date,
        required: true
    },
    date_end: Date,
    title: {
        type: String,
        required: true
    }
});

Events
    .pre('validate', generateSlug('Events', 'title', 'slug'));

module.exports = mongoose.model('Events', Events)
