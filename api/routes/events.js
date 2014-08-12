'use strict'

var EventsCtr = require('../controllers/events');
var t = require('joi');

module.exports = function (server) {
    server.route([{
        method: 'GET',
        path: '/events',
        config: {
            handler: EventsCtr.index,
            description: 'GET all events',
            notes: 'test note'
        }
    }, {
        method: 'POST',
        path: '/events',
        config: {
            handler: EventsCtr.create,
            /*validate: {
                query: {
                    title: t.string().required()
                }
            },*/
            tags: ['admin', 'api'],
            description: 'Test GET',
            notes: 'test note'
        }
    }])
};
