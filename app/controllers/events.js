'use strict'

var api = require('../lib/apiHelper');

module.exports = {
    index: function (req, reply) {
        api.get('/events').then(function (events) {
            reply.view('events/index.html', {events: events});
        }).fail(function (err) {
            console.error('#1 get Events', err);
            reply(err);
        }).fail(console.error.bind('#2 get Events', console));
    },
    detail: function (req, reply) {
        api
            .get('/events/' + req.params.slug)
            .then(function (event) {
                reply.view('events/detail.html', {event: event});
            })
            .fail(function (err) {
                console.error('#1 get Events', err);
                reply(err);
            })
            .fail(console.error.bind('#2 get Events', console));
    }
};
