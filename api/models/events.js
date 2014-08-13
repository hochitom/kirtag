'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamps');
var slugify = require('mongoose-slugify');

var Events = new Schema({
    slug: {
        index: true,
        type: String,
        unique: true
    },
    status: {
        type: String,
        default: 'public',
        enum: ['private', 'public', 'hidden', 'deleted']
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
        ref: 'Tournaments'
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

Events.plugin(timestamp);
Events.plugin(slugify, {
    prop: 'title',
    index: true
});

module.exports = mongoose.model('Events', Events)
