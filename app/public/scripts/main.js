var $ = require('jquery');
var handlebars = require('handlebars');
var q = require('q');

// load hbs template
var templates = {};

var getTemplate = function (tmp) {
    var d = q.defer();

    if (templates[tmp]) {
        d.resolve(templates[tmp]);
    } else {
        $.get('/templates/' + tmp).success(function (template) {
            templates[tmp] = handlebars.compile(template);
            d.resolve(templates[tmp]);
        });
    }

    return d.promise;
};

$(document).on('click', '.js-async', function (e) {
    e.preventDefault();

    var $this = $(this);
    var link = $this.attr('href');
    var tmp = $this.attr('data-tmp');

    $.get(link + '?json=1')
        .then(function (d) {
            updateContent(tmp, d);

            var d1 = {
                data: d,
                tmp: tmp
            }
            history.pushState(d1, d.title, link);
        });
});

function updateContent(tmp, data) {
    if (data == null)
        return;

    getTemplate(tmp).then(function (template) {
        console.log('here is your template', template);
        $('#js-view').html(template(data));
    });
}

window.addEventListener('popstate', function(event) {
    if (event.state.static)
        $('#js-view').html(event.state.static);
    else
        updateContent(event.state.tmp, event.state.data);
});

history.replaceState({static: $('#js-view')}, document.title, document.location.href);
