const express = require('express'),
    fs = require('fs'),
    app = express(),
    path = require('path'),
    port = 1234;

app.use('/src', express.static(__dirname + '/src'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/views', express.static(__dirname + '/views'));


app.get('/', function (req, res) {
    res.sendFile('views/index.html', {root: __dirname});
});
app.get('/employees', function (req, res) {
    res.sendFile('views/index.html', {root: __dirname});
});

app.listen(port);