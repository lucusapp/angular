var express = require ('express'),
    ubigeo = require('./controllers/ubigeo.js'),
    app = express ();

app.set ('view engine', 'jade');
app.set('views', __dirname + '/views');
//ubicación de los archivos estaticos
app.use(express.static(__dirname + '/public'));

app.get('/', ubigeo.index);
//con esto estoy accediendo a la función que está dentro del objeto ubigeo
app.listen(7000, function() {
  console.log('servidor iniciado en el puerto 7000')
});
