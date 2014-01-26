var express = require('express');
var routes=require('./routes');
var app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/todos', routes.todos);
app.post('/todos', routes.submit);
app.get('/todos/:id', routes.select);
app.post('/todos/:id', routes.change);

app.listen(4242);
