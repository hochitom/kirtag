'use strict'

var Tournaments = require('../models/tournaments');

module.exports = {
    index: function (req, reply) {
        var query;

        Tournaments.find(query).exec(function (err, tournaments) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            reply(tournaments);
        });
    },
    create: function (req, reply) {
        var tournament = new Tournaments(req.payload);

        tournament.save(function (err, tournament) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            reply(tournament);
        });
    }
}
