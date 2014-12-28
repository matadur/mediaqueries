Package.describe({
    name: "nerdmed:mediaqueries",
    summary: "Reactive media queries for all browsers",
    version: "0.1.3",
    git: "https://github.com/nerdmed/mediaqueries.git"
});

Package.onUse(function(api, where) {
    api.versionsFrom("METEOR@0.9.3")

    api.use(['reactive-dict', 'underscore', 'ejson', 'deps', 'templating'], 'client');
    api.addFiles(['lib/media-match/media.match.js', 'lib/mediaqueries.js'], 'client');
});
