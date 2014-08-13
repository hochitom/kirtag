'use strict'

var LeaguesCtr = require('../controllers/leagues');
var Joi = require('joi');

module.exports = function (server) {
    server.route([{
        method: 'GET',
        path: '/leagues',
        config: {
            handler: LeaguesCtr.index
        }
    }, {
        method: 'POST',
        path: '/leagues',
        config: {
            handler: LeaguesCtr.create
        }
    }])
};
