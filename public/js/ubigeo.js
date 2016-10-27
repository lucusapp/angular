var app = angular.module('app',());

app.controller('NivelCtrol', function ($scope, $http){
  //llamamos al servicio de angular http, con esto vamos a hacer llamadas ajax
  //en el archivo data hay una carpeta dpto.json que contiene todos los departamentos
    //  $http.get('/data/nivel.json')
      //una vez que se lea si se tiene exito en la lectura, en una variable data se almacene todo el contenido.
        //.success(function (data) {
        //  $scope.nivel = data;
        //  $scope.jugad=data[0].codjug;
        //si queremos que se muestre tendremos que mencionar una variable definida en index.html
          //$scope.cargarjug();
        //});

        $http.get('/db/jugadores')
          .success(function(data) {
            $scope.nivel = data;
            $scope.jugad=data[0].codjug;
            si queremos que se muestre tendremos que mencionar una variable definida en index.html
            $scope.cargarjug();
          })


      $scope.cargarjug = function () {
          $http.get ('/data/jugadores.json')
              .success(function(data) {
                  data = data.filter(function(item){
                      return (item.codjug == $scope.nivel);
                  });
                  $scope.jugad = data;
                  $scope.jugadores = data [0].codjug;
              });
      };
});
