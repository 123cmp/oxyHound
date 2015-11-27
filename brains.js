var Chance = require("chance"),
    fs = require('fs');
var chance = new Chance();

function Brains() {
    var self = this;
    var listeners = {};
    var sessionDir = "";

    self.getImageName = function() {
      return sessionDir + "/" + (new Date).toTimeString();
    };

    self.startSession = function() {
        sessionDir = 'sessions/' + (new Date()).toTimeString();
        if(!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir);
    };

    self.dispatch = function(event) {
        event = event.split(":");

        var key = event[0],
            value = event[1];

        if(listeners[key]) {
            listeners[key].forEach(function(listener) {
                if(listener.event == value) {
                    listener.callback();
                }
            })
        }
    };

    self.subscribe = function(event, callback) {
        event = event.split(":");
        var id = chance.guid();

        var key = event[0],
            value = event[1];

        if(!listeners[key]) listeners[key] = [{event: value, callback: callback, id: id}];
        else listeners[key].push({event: value, callback: callback, id: id});

        return id;
    };

    self.unsubscribe = function(event, id) {
        event = event.split(":");

        var key = event[0];

        if(listeners[key]) {
            listeners[key].forEach(function(listener, i) {
                if(listener.id == id) {
                    delete listeners[key][i];
                }
            })
        }
    };


    return self;
}

var instance = new Brains();

module.exports = instance;