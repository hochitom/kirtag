'use strict'

var EventsCtr = require('../controllers/events');
var Joi = require('joi');

var createSchema = Joi.object({
    status: Joi.string().optional().valid('private', 'public', 'hidden', 'deleted'),
    title: Joi.string().required(),
    date_start: Joi.string().required(),
    date_end: Joi.any(),
    all_day: Joi.boolean(),
    content: Joi.string().optional(),
    image: Joi.string().optional(),
    type: Joi.string().optional().valid('club', 'tournament', 'league'),
    club: Joi.string().optional(),
    league: Joi.string().optional(),
    tournament: Joi.string().optional(),
    match: Joi.string().optional()
}).xor('club', 'league', 'tournament', 'match').options({abortEarly: false});

module.exports = function (server) {
    server.route([{
        method: 'GET',
        path: '/events',
        config: {
            handler: EventsCtr.index,
            description: 'GET all events',
            notes: 'You can filter events by adding type as query param'
        }
    }, {
        method: 'POST',
        path: '/events',
        config: {
            handler: EventsCtr.create,
            validate: {
                payload: createSchema
            },
            description: 'Create a new Event',
            notes: 'Club, League, Tournement or Match are required. But only one of them is allowed.'
        }
    }, {
        method: 'GET',
        path: '/events/{slug}',
        config: {
            handler: EventsCtr.detail,
            description: 'get detail event information for given slug'
        }
    }, {
        method: 'PUT',
        path: '/events/{slug}',
        config: {
            handler: EventsCtr.update,
            description: 'edit detail event information for given slug'
        }
    }, {
        method: 'DELETE',
        path: '/events/{slug}',
        config: {
            handler: EventsCtr.delete,
            description: 'delete event'
        }
    }])
};
