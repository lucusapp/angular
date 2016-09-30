//con este modelo vamos a acceder a mongodb
var mongoclient = require ('mongodb').mongoclient;
//realizamos la conexion
mongoclient.connect('mongodb://localhost/ubigeo,')
