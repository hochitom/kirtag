'use strict'

var hapi = require('hapi');

var plugins = [
    require('lout'),
    require('good')
];

var server = new hapi.Server(3001);

require('./routes')(server);

server.pack.register(plugins, function() {
    server.start(function () {
        console.log('server running on ' + server.info.uri);
    });
});
