'use strict'

var TournamentsCtr = require('../controllers/tournaments');
var Joi = require('joi');

module.exports = function (server) {
    server.route([{
        method: 'GET',
        path: '/tournaments',
        config: {
            handler: TournamentsCtr.index
        }
    }, {
        method: 'POST',
        path: '/tournaments',
        config: {
            handler: TournamentsCtr.create
        }
    }])
};
