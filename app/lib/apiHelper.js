'use strict';

var request = require('request');
var Q = require('q');
//var config = require('../config');
var get = Q.nbind(request.get, request);
var put = Q.nbind(request.put, request);
var del = Q.nbind(request.del, request);
var post = Q.nbind(request.post, request);

var http = require('http');
var pool = new http.Agent({maxSockets: 100});

var config = {
    api: 'http://127.0.0.1:3000'
};

var responseHandler = function (start, endpoint) {
    return function (res, data) {
        var result;

        if(data.length) {
            try {
                result = JSON.parse(data);
            } catch (e) {
                result = {data: data, statusCode: res.statusCode};
            }
        }

        var dfd = Q.defer();

        if (res.statusCode < 400) {
            dfd.resolve(result);
        } else {
            dfd.reject(result);
        }

        var time = Date.now() - start;
        if(time > 50) console.warn('api:long-request:' + time + ':' + endpoint);

        return dfd.promise;
    };
};

module.exports = {
    get: function (endpoint, token) {
        console.log('api:get:' + endpoint);
        var start = Date.now();
        var options = {pool: pool};

        if (!endpoint)
            throw new Error('endpoint is required!');

        if (endpoint) {
            options.url = config.api + endpoint;
        }

        if (token) options.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        };

        return get(options).spread(responseHandler(start, endpoint));
    },

    post: function (endpoint, form, token) {
        console.log('api:post:' + endpoint);
        var start = Date.now();
        var options = {pool: pool};
        if (!endpoint)
            throw new Error('endpoint is required!');

        if (endpoint) options.url = config.api + endpoint;
        if (token) {
            options.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
        }

        options.form = form;

        return post(options).spread(responseHandler(start, endpoint));
    },
    put: function (endpoint, form, token) {
        console.log('api:put:' + endpoint);
        var start = Date.now();
        var options = {pool: pool};
        if (!endpoint)
            throw new Error('endpoint is required!');

        if (endpoint) {
            options.url = config.api + endpoint;
        }
        if (token) {
            options.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
        }

        options.form = form;

        return put(options).spread(responseHandler(start, endpoint));
    },
    delete: function (endpoint, token) {
        console.log('api:delete:' + endpoint);
        var start = Date.now();
        var options = {pool: pool};
        if (!endpoint)
            throw new Error('endpoint is required!');

        if (endpoint) {
            options.url = config.api + endpoint;
        }
        if (token) {
            options.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
        }

        return del(options).spread(responseHandler(start, endpoint));
    }
};
