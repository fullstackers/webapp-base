var path = require('path'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    staticPath = path.join(__dirname, 'generated/');

app.use(express.static(staticPath));

app.listen(port, function() {
    console.log('Web Application Static Server Started');
    console.log('Port:', port);
});
