module.exports = function (server) {
    server.route({
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: './public/',
                listing: false
            }
        }
    });
};
