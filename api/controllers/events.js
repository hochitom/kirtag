'use strict'

var Events = require('../models/events');

module.exports = {
    index: function (req, reply) {
        reply([]);
    },
    create: function (req, reply) {
        var event = new Events(req.payload);

        event.save(function (err, event) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            reply(event);
        });
    }
}
