//con este modelo vamos a acceder a mongodb
var MongoClient = require ('mongodb').MongoClient;
//realizamos la conexion
MongoClient.connect('mongodb://localhost:27017/ubigeo', function(err, db){

  if (err) throw err;

  exports.cargarJugador = function(cb) {

    var Jugador = db.collection('Jugador');

    Dpto.find().toArray(function(err,results) {
      cb(results);
    });

  };

});
