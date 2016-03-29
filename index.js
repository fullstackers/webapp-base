var path = require('path'),
    express = require('express'),
    compression = require('compression'),
    app = express(),
    port = process.env.PORT || 3000,
    staticDirectory = process.env.NODE_ENV === 'production' ? 'dist' : 'generated',
    staticPath = path.join(__dirname, staticDirectory);

// gzip static content
app.use(compression());

// serve static content
app.use(express.static(staticPath, { maxAge: 2592000000 }));

// Support HTML5 Mode for the AngularJS app
app.all('/*', function(req, res) {
    res.sendFile(staticPath + '/index.html');
});

// Start the HTTP Server
app.listen(port, function() {
    console.log('Web Application Static Server Started');
    console.log('Port:', port);
    console.log('Serving:', staticPath);
});
