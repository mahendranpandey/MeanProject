ar express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = router;