
class Peliculas {
    constructor() {
        this.listaPeliculas = []
    }

    //Obtiene la pelicua verificando si el genero de la pelicula existe
    obtenerPeliculaGenero() {
        let index = this.listaPeliculas.findIndex(element => element.genero=='comedia')
        if(this.listaPeliculas.findIndex!= undefined){
            return this.listaPeliculas.index
        }else{
            console.log("La película no existe")
        }
        
    }

//u = ubicacion como parametro

    obtenerPeliculaUbicacion(u) {
        let index = this.listaPeliculas.findIndex(element => element.ubicacion==u)
        if(this.listaPeliculas.findIndex!= undefined){
            return this.listaPeliculas.index
        }else{
            console.log("La película no existe")
        }
        
    }

    //n como parametro para nombre
    obtenerPeliculaNombre(n) {
        let index = this.listaPeliculas.findIndex(element => element.nombre==n)
        if(this.listaPeliculas.findIndex!= undefined){
            return this.listaPeliculas.index
        }else{
            console.log("La película no existe")
        }
        
    }

    obtenerPeliculaNombre(n) {
        let index = this.listaPeliculas.findIndex(element => element.nombre==n)
        if(this.listaPeliculas.findIndex!= undefined){
            return this.listaPeliculas.index
        }else{
            console.log("La película no existe")
        }
    } 

    obtenerPeliculaAnios(a1,a2) {
        let index = this.listaPeliculas.findIndex(element => element.anio<=a1 && element.anio>=a2)
        if(this.listaPeliculas.findIndex!= undefined){
            return this.listaPeliculas.index
        }else{
            console.log("La película no existe")
        }
    } 

    eliminarPelicula() {
        let index = this.listaPeliculas.findIndex(element => element.genero==empty)
        this.listaPeliculas.splice(index,1)
    }
}

module.exports = Peliculas
