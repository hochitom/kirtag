var $ = require('jquery');
var handlebars = require('handlebars');
var q = require('q');

// load hbs template
var templates = {};

if (templates && !templates['events-detail']) {
    $.get('/templates/events/detail.html').success(function (tmp) {
        templates['events-detail'] = handlebars.compile(tmp);
    });
}

$('.js-events-list').on('click', 'a', function (e) {
    e.preventDefault();
    var link = $(this).attr('href');

    $.get('//127.0.0.1:3000' + link).success(function (data) {
        console.log(data);
        console.log(templates['events-detail']);
        if (templates['events-detail']) {
            $('#js-view').html(templates['events-detail']({event: data}));
            history.pushState({}, data.title, link);
        }
    });
});
