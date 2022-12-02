var server = require('express');
var app = server();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(server.static(__dirname));
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
})