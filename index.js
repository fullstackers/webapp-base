var path = require('path'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    staticDirectory = process.env.NODE_ENV === 'production' ? 'dist' : 'generated',
    staticPath = path.join(__dirname, staticDirectory);

app.use(express.static(staticPath));

app.all('/*', function(req, res) {
    res.sendFile(staticPath + '/index.html');
});

app.listen(port, function() {
    console.log('Web Application Static Server Started');
    console.log('Port:', port);
    console.log('Serving:', staticPath);
});
