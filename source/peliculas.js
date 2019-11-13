var express = require("express");
var router = express.Router();
const PeliculaController = require('../Controllers/peliculasControllers')
const misPeliculas = new PeliculaController()

//---IMPORTACIÓN DE LAS 405 PELICULAS
var peliculas = require("./listado_peliculas");

router.get("/peliculas/", function(req, res, next) {
  try {
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = misPeliculas.obtenerPeliculaGenero().then(() => {
        respuesta.mensaje = "Peliculas consultadas"
        response.send(respuesta)
    //Impresión de las peliculas en consola
    console.log(peliculas);
    res.status(200).send({ mensaje: "Estoy en el get de peliculas" })});
  } catch (error) {
    res.status(400).send({ mensaje: "Ha ocurrido un error!" });
  }
});

router.get("/peliculas/u", function(req, res, next) {
  try {
    let u = req.params.ubicacion
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = misPeliculas.obtenerPeliculaUbicacion(u).then(() => {
        respuesta.mensaje = "Peliculas consultadas"
        response.send(respuesta)
    //Impresión de las peliculas en consola
    console.log(peliculas);
    res.status(200).send({ mensaje: "Estoy en el get de peliculas" })});
  } catch (error) {
    res.status(400).send({ mensaje: "Ha ocurrido un error!" });
  }
});

router.get("/peliculas/n", function(req, res, next) {
  try {
    let n = req.params.nombre
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = misPeliculas.obtenerPeliculaNombre(n).then(() => {
        respuesta.mensaje = "Peliculas consultadas"
        response.send(respuesta)
    //Impresión de las peliculas en consola
    console.log(peliculas);
    res.status(200).send({ mensaje: "Estoy en el get de peliculas" })});
  } catch (error) {
    res.status(400).send({ mensaje: "Ha ocurrido un error!" });
  }
});

router.get("/peliculas/a1/a2", function(req, res, next) {
  try {
    let a1 = req.params.anio
    let a2 = req.params.anio
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = misPeliculas.obtenerPeliculaNombre(a1,a2).then(() => {
        respuesta.mensaje = "Peliculas consultadas"
        response.send(respuesta)
    //Impresión de las peliculas en consola
    console.log(peliculas);
    res.status(200).send({ mensaje: "Estoy en el get de peliculas" })});
  } catch (error) {
    res.status(400).send({ mensaje: "Ha ocurrido un error!" });
  }
});

router.delete("/peliculas/", function( res) {
    misPeliculas.eliminarPelicula()
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = {}
    respuesta.mensaje = "La Pelicula ha sido eliminada"
    response.send(respuesta)
  res.status(200).send({
    mensaje: "ESTOY EN EL ENDPOINT DE DELETE"
  });
});

module.exports = router;
