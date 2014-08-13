'use strict'

var Events = require('../models/events');

module.exports = {
    index: function (req, reply) {
        var query;

        if (req.query.type) {
            query = {
                type: req.query.type
            }
        }

        Events.find(query).exec(function (err, events) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            reply(events);
        });
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
    },
    detail: function (req, reply) {
        Events.findOne({slug: req.params.slug}).exec(function (err, event) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            reply(event);
        });
    },
    update: function (req, reply) {
        Events.findOne({slug: req.params.slug}).exec(function (err, event) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            event.title = req.payload.title;

            event.save(function (err) {
                if (err) {
                    console.error(err);
                    return reply(err);
                }

                reply(req.payload);
            });
        });
    }
}