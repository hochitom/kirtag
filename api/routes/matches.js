'use strict'

var MatchesCtr = require('../controllers/matches');
var Joi = require('joi');

module.exports = function (server) {
    server.route([{
        method: 'GET',
        path: '/matches',
        config: {
            handler: MatchesCtr.index
        }
    }, {
        method: 'POST',
        path: '/matches',
        config: {
            handler: MatchesCtr.create
        }
    }])
};
