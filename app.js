var express = require('express');
var todoControllers = require('./controllers/todoController');
var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todoControllers(app);

app.listen(3000);
