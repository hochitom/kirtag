'use strict'

var Clubs = require('../models/clubs');

module.exports = {
    index: function (req, reply) {
        var query;

        Clubs.find(query).exec(function (err, clubs) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            reply(clubs);
        });
    },
    create: function (req, reply) {
        var club = new Clubs(req.payload);

        club.save(function (err, club) {
            if (err) {
                console.error(err);
                return reply(err);
            }

            reply(club);
        });
    }
}
