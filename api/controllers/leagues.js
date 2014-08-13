'use strict'

var Leagues = require('../models/leagues');

module.exports = {
    index: function (req, reply) {
        var query;

        Leagues.find(query).exec(function (err, leagues) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            reply(leagues);
        });
    },
    create: function (req, reply) {
        var league = new Leagues(req.payload);

        league.save(function (err, league) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            reply(league);
        });
    }
}
