var express = require('express');
var app = express();

app.use(express.static('./client'));
app.set('x-powered-by', false);

var porta = process.env.PORT || 3000;

app.listen(porta, function() {
    console.log('O servidor foi iniciado na porta: ' + porta);
});