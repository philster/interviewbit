/**
 * Simple link shortener server
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const RateLimit = require('express-rate-limit');
const fs = require('fs');
const http = require('http');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// load db file
const dbFileName = 'db.json';
let dbData;
try {
    dbData = fs.readFileSync(dbFileName);
} catch (err) {
    if (err.code === 'ENOENT') {  // file not found
        dbData = JSON.stringify({ links: {} });
    } else {
        throw err;
    }
}
const dbJson = JSON.parse(dbData);

// random id generator
const generateId = () => Math.random().toString(36).slice(2,8);

// create short links limiter
const createShortLinksLimiter = new RateLimit({
    windowMs: 60*60*1000,  // 1 hour
    max: 100,  // limit to 100 requests per windowMs
    //statusCode: 429,  // http status code returned when max is exceeded; defaults to 429
    delayMs: 0  // disable delaying - full speed until the max limit is reached
});

// GET /:linkId
app.get('/:linkId', function(req, res) {
    const url = dbJson.links[req.params.linkId];
    if (url) {
        res.writeHead(302, { Location: url });
        res.end();
    } else {
        res.status(404).end();
    }
});

// POST /
app.post('/', createShortLinksLimiter, function(req, res) {
    const url = req.body.url;
    const id = req.body.id || generateId();
    if (!url) {
        res.end();
    } else if (id in dbJson.links) {
        res.status(409).end();
    } else {
        dbJson.links[''+id] = url;
        fs.writeFileSync(dbFileName, JSON.stringify(dbJson));
        res.writeHead(201, { Location: url, id: id });
        res.end();
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.end('error');
});

// start the server in the port 3000 !
const port = 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port + '.');
});

module.exports = app;
