'use strict'

var hapi = require('hapi');

var plugins = [
    require('lout'),
    {
        plugin: require('hapi-mongoose-db-connector'),
        options: {
            mongodbUrl: 'mongodb://localhost/kirtag'
        }
    },
    require('good')
];

var server = new hapi.Server(3000);

require('./routes')(server);

server.pack.register(plugins, function() {
    server.start(function () {
        console.log('server running on ' + server.info.uri);
    });
});
