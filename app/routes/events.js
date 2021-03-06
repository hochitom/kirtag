'use strict'

var EventsCtr = require('../controllers/events');

module.exports = function (server) {
    server.route([{
        method: 'GET',
        path: '/events',
        config: {
            handler: EventsCtr.index
        }
    },{
        method: 'GET',
        path: '/events/{slug}',
        config: {
            handler: EventsCtr.detail
        }
    }])
};
