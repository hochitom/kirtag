var $ = require('jquery');
var handlebars = require('handlebars');
var q = require('q');

// load hbs template
var templates = {};

var getTemplate = function (tmp) {
    var d = q.deferred();

    if (!templates)
        templates = {};

    if (!templates[tmp]) {
        $.get('/templates/' + tmp).success(function (template) {
            templates[tmp] = handlebars.compile(template);
            d.resolve(templates[tmp]);
        });
    } else {
        d.resolve(templates[tmp]);
    }

    return d.promise;
};



$(document).on('click', '.js-async', function (e) {
    e.preventDefault();
    var $this = $(this);
    var link = $this.attr('href');
    var data;

    $.get('//127.0.0.1:3000' + link)
    .then(function (d) {
        data = d;
        return getTemplate($this.attr('data-tmp'));
    })
    .then(function (template) {
        $('#js-view').html(template({event: data}));
        history.pushState({}, data.title, link);
    });
});
