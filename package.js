Package.describe({
    name: "matadur:mediaqueries",
    summary: "Reactive media queries for all browsers, forked from nerdmed:mediaqueries",
    version: "0.1.6",
    git: "https://github.com/matadur/mediaqueries.git"
});

Package.onUse(function(api, where) {
    api.versionsFrom("1.0")

    api.use(['reactive-dict', 'underscore', 'ejson', 'deps', 'templating'], 'client');
    api.addFiles(['lib/media-match/media.match.js', 'lib/mediaqueries.js'], 'client');

    api.export('mediaqueries');
});
