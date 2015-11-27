var express = require('express'),
    Brains = require('./brains'),
    app = express();

function startListening() {

    app.get("/stop", function(req, res) {
        Brains.dispatch("ears:stop");
        res.sendStatus(200);

    });

    app.get("/", function(req, res) {
        res.send("Uoff, uoff");
    });

    app.listen(8000);

    Brains.dispatch("mouth:voice");
}

module.exports = {
    run: function() {
        startListening();
    }
};