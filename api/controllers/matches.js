'use strict'

var Matches = require('../models/matches');

module.exports = {
    index: function (req, reply) {
        var query;

        Matches.find(query).exec(function (err, matches) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            reply(matches);
        });
    },
    create: function (req, reply) {
        var match = new Matches(req.payload);

        match.save(function (err, match) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            reply(match);
        });
    }
}
