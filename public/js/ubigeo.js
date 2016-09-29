var app = angular.module('app',());

app.controller('NivelCtrol', function ($scope, $http){
  //llamamos al servicio de angular http, con esto vamos a hacer llamadas ajax
  //en el archivo data hay una carpeta dpto.json que contiene todos los departamentos
      $http.get('/data/dpto.json')
      //una vez que se lea si se tiene exito en la lectura, en una variable data se almacene todo el contenido.
      .success(function (data) {
          $scope.mensaje = data
        //si queremos que se muestre tendremos que mencionar una variable definida en index.html

});
