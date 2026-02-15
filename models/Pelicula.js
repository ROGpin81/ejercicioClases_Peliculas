const Contenido = require("./Contenido");

class Pelicula extends Contenido {
  constructor(id, titulo, genero, anio, duracionMin, director) {
    super(id, titulo, genero);
    this.anio = anio;
    this.duracionMin = duracionMin;
    this.director = director;
  }
}

module.exports = Pelicula;
