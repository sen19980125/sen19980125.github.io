var express = require('express');
var app = express();
var path = require('path');
var router = require('./router/router.js');

app.use('/',express.static(path.join(__dirname,'public')));
app.use('/',router);
app.listen(10000);