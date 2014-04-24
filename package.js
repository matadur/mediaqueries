Package.describe({
    summary: "Reactive media queries for all browsers"
});

Package.on_use(function(api, where) {

    api.use(['reactive-dict', 'underscore', 'ejson', 'deps', 'ui'], 'client');
    api.add_files(['lib/media-match/media.match.js', 'lib/mediaqueries.js'], 'client');

    if (api.export)
        api.export('mediaqueries');
});