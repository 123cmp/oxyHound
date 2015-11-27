var Brains = require('./brains'),
    childProcess = require('child_process');

var interval = null;

function startWatching() {
    interval = setInterval(remember, 10000);
    Brains.subscribe("ears:stop", function() {
        stopWatching();
    })
}

function stopWatching() {
    if(interval) clearInterval(interval);
    interval = null;
}

function remember() {
    var fileName = '\''+Brains.getImageName()+'\'.png';
    childProcess.exec('scrot ' + fileName, function(err) {

    });
}

module.exports = {
    run: function() {
        startWatching();
    },
    stop: function() {
        stopWatching()
    }
};