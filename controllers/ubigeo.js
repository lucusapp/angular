//manejador de rutas

module.exports = exports = {
//vamos a exportar un objeto
    index: function (req,res) {
      res.render("index", {
        titulo: "Menu Padel"
      });
      //con lo que acabamos de hacer tenemos mas ordenadas las rutas.
      //esto sustituirá a lo que hasta el momento teniamos en app.js en la
      //linea app.get('/', (ahora en lugar de toda la función conlocaremos index))
      //por ultimo crearemos una variable ubigeo = require ('./controllers/ubigeo')
    }
};
