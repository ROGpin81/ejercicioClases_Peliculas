const Pelicula = require("./models/Pelicula");
const CatalogoPeliculas = require("./models/CatalogoPeliculas");

const catalogo = new CatalogoPeliculas();

console.log("=== APP CONSOLA: CATÁLOGO DE PELÍCULAS ===");

// CREATE (Crear películas)
console.log("\n[CREATE] Agregando películas...");

const p1 = catalogo.crear(
  new Pelicula(null, "Inception", "Ciencia ficción", 2010, 148, "Christopher Nolan")
);

const p2 = catalogo.crear(
  new Pelicula(null, "The Matrix", "Ciencia ficción", 1999, 136, "Lana & Lilly Wachowski")
);

const p3 = catalogo.crear(
  new Pelicula(null, "Coco", "Animación", 2017, 105, "Lee Unkrich")
);

console.log("Creada:", p1);
console.log("Creada:", p2);
console.log("Creada:", p3);


// READ (Listar películas)
console.log("\n[READ] Listando catálogo...");
catalogo.listar().forEach((p) => console.log(p));


// READ (Buscar por ID)
console.log("\n[READ] Buscar por id=2");
const encontrada = catalogo.buscarPorId(2);
console.log("Resultado:", encontrada);


// UPDATE (Actualizar)
console.log("\n[UPDATE] Actualizar id=2 (duración y año)...");
const actualizada = catalogo.actualizar(2, { duracionMin: 140, anio: 2000 });
console.log("Resultado:", actualizada);

// DELETE (Eliminar)
console.log("\n[DELETE] Eliminar id=1...");
const eliminado = catalogo.eliminar(1);
console.log("Eliminado:", eliminado);

// READ (Listar final)
console.log("\n[READ] Catálogo final...");
catalogo.listar().forEach((p) => console.log(p));
