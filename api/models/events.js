'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var generateSlug = require('mongoose-slugs');
var timestamps = require('mongoose-timestamps');

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
    all_day: Boolean,
    title: {
        type: String,
        required: true
    },
    content: String,
    image: String,
    type: {
        index: true,
        enum: ['club', 'tournament', 'league'],
        type: String,
        required: true
    },
    club: {
        type: Schema.Types.ObjectId,
        ref: 'Clubs'
    },
    tournament: {
        type: Schema.Types.ObjectId,
        ref: 'Tournements'
    },
    league: {
        type: Schema.Types.ObjectId,
        ref: 'Leagues'
    },
    /*match: {
        type: Schema.Types.ObjectId,
        ref: 'Matches'
    }*/
});

Events.plugin(timestamps);

Events
    .pre('validate', generateSlug('Events', 'title', 'slug'));

module.exports = mongoose.model('Events', Events)
