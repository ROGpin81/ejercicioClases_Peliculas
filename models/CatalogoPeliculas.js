// models/CatalogoPeliculas.js
class CatalogoPeliculas {
  constructor() {
    this.peliculas = [];
    this.nextId = 1;
  }

  // CREATE
  crear(pelicula) {
    pelicula.id = this.nextId;
    this.nextId++;

    this.peliculas.push(pelicula);
    return pelicula;
  }

  // READ
  listar() {
    return this.peliculas;
  }

  // READ
  buscarPorId(id) {
    const encontrada = this.peliculas.find((p) => p.id === id);
    return encontrada ? encontrada : null;
  }

  // UPDATE
  actualizar(id, cambios) {
    const index = this.peliculas.findIndex((p) => p.id === id);
    if (index === -1) return null;

    this.peliculas[index] = {
      ...this.peliculas[index],
      ...cambios,
      id: id
    };

    return this.peliculas[index];
  }

  // DELETE
  eliminar(id) {
    const index = this.peliculas.findIndex((p) => p.id === id);
    if (index === -1) return false;

    this.peliculas.splice(index, 1);
    return true;
  }
}

module.exports = CatalogoPeliculas;
