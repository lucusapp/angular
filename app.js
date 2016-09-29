var express = require ('express'),
    app = express ();
//ubicación de los archivos estaticos
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile("index.html");
});

app.listen(7000, function() {
  console.log('servidor iniciado en el puerto 7000')
});
