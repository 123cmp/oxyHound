var Brains = require('./brains'),
    childProcess = require('child_process');

function startWatching() {
    setInterval(remember, 10000);
    Brains.subscribe("ears:stop", function() {
        stopWatching();
    })
}

function stopWatching() {
    process.exit(0)
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