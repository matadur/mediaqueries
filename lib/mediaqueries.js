MediaQueries = function(obj) {
    var self = this;
    this.dict = new ReactiveDict();
    this.queryId = 0; // counts the query to get IDs
}


_.extend(MediaQueries.prototype, {


    register: function(query, name) { // whoist this function to the top
        check(query, String);
        var self = this;
        var query = window.matchMedia(query);
        var queryId = "query-" + self.queryId;
        if (name) { // if name is provided save it with name in the dict
            queryId = name;
        }

        if (query.matches) {
            self.dict.set(queryId, true);

        } else {
            self.dict.set(queryId, false);
        }

        query.addListener(function(mqy) {
            if (mqy.matches) {
                self.dict.set(queryId, true);

            } else {
                self.dict.set(queryId, false);
            }
        });

        if (!name) self.queryId++;


        return self.dict.get(queryId);
    },

    get: function(name) {
        var self = this;
        return self.dict.get(name);
    },
    set: function(name) {
        var self = this;
        return self.dict.set(name);
    }


});



mediaqueries = new MediaQueries();


UI.registerHelper("mediaqueries", function(name, match, nomatch) {
    check(name, String);
    check(match, String);
    if (nomatch) {
        check(nomatch, String);
    } else {
        nomatch = "";
    }
    console.log(mediaqueries.get(name))
    if (mediaqueries.get(name)) {
        return match;
    } else {
        return nomatch;
    }

})