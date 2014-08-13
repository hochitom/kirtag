'use strict'

var ClubsCtr = require('../controllers/clubs');
var Joi = require('joi');

module.exports = function (server) {
    server.route([{
        method: 'GET',
        path: '/clubs',
        config: {
            handler: ClubsCtr.index
        }
    }, {
        method: 'POST',
        path: '/clubs',
        config: {
            handler: ClubsCtr.create
        }
    }])
};
