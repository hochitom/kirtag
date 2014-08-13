'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamps');
var slugify = require('mongoose-slugify');

var Leagues = new Schema({
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

Leagues.plugin(timestamp);
Leagues.plugin(slugify, {
    prop: 'name',
    index: true
});

module.exports = mongoose.model('Leagues', Leagues)
