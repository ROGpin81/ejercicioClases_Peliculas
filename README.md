# Catálogo de Películas -- Node.js (CRUD con Clases)

## Descripción

Aplicación de consola desarrollada en **Node.js** que permite
administrar un arreglo de películas utilizando Programación Orientada a
Objetos (POO), herencia y modularización.

El sistema implementa un **CRUD completo** (Create, Read, Update,
Delete) y está organizado por archivos siguiendo buenas prácticas de
separación de responsabilidades.

------------------------------------------------------------------------

## Objetivo del Proyecto

Desarrollar una aplicación de consola que:

-   Utilice clases en JavaScript.
-   Aplique herencia con `extends` y `super`.
-   Administre una colección de objetos.
-   Implemente un CRUD completo.
-   Utilice módulos con `require` y `module.exports`.
-   Mantenga una estructura simple y clara para fines académicos.

------------------------------------------------------------------------

## Arquitectura del Proyecto

    ejercicioClases_Peliculas/
    │
    ├── index.js
    ├── package.json
    ├── .gitignore
    └── models/
        ├── Contenido.js
        ├── Pelicula.js
        └── CatalogoPeliculas.js

------------------------------------------------------------------------

## Construcción de la Aplicación

La aplicación está estructurada en tres niveles:

1.  Modelo Base
2.  Modelo Especializado
3.  Gestión de Colección (CRUD)
4.  Archivo Principal de Ejecución

------------------------------------------------------------------------

## Clase Base: Contenido

Archivo: `models/Contenido.js`

``` js
class Contenido {
  constructor(id, titulo, genero) {
    this.id = id;
    this.titulo = titulo;
    this.genero = genero;
  }
}

module.exports = Contenido;
```

------------------------------------------------------------------------

## Clase Hija: Pelicula

Archivo: `models/Pelicula.js`

``` js
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
```

------------------------------------------------------------------------

## Clase de Gestión: CatalogoPeliculas

Archivo: `models/CatalogoPeliculas.js`

``` js
class CatalogoPeliculas {
  constructor() {
    this.peliculas = [];
    this.nextId = 1;
  }

  crear(pelicula) {
    pelicula.id = this.nextId;
    this.nextId++;
    this.peliculas.push(pelicula);
    return pelicula;
  }

  listar() {
    return this.peliculas;
  }

  buscarPorId(id) {
    return this.peliculas.find((p) => p.id === id) || null;
  }

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

  eliminar(id) {
    const index = this.peliculas.findIndex((p) => p.id === id);
    if (index === -1) return false;

    this.peliculas.splice(index, 1);
    return true;
  }
}

module.exports = CatalogoPeliculas;
```

------------------------------------------------------------------------

## Archivo Principal: index.js

``` js
const Pelicula = require("./models/Pelicula");
const CatalogoPeliculas = require("./models/CatalogoPeliculas");

const catalogo = new CatalogoPeliculas();

console.log("=== APP CONSOLA: CATÁLOGO DE PELÍCULAS ===");

const p1 = catalogo.crear(
  new Pelicula(null, "Inception", "Ciencia ficción", 2010, 148, "Christopher Nolan")
);

const p2 = catalogo.crear(
  new Pelicula(null, "The Matrix", "Ciencia ficción", 1999, 136, "Lana & Lilly Wachowski")
);

console.log("\nListado completo:");
catalogo.listar().forEach((p) => console.log(p));

catalogo.actualizar(2, { anio: 2000 });
catalogo.eliminar(1);

console.log("\nCatálogo final:");
catalogo.listar().forEach((p) => console.log(p));
```
------------------------------------------------------------------------

## Cómo Ejecutar

``` bash
node index.js
```

O agregando:

``` json
"scripts": {
  "start": "node index.js"
}
```

Ejecutar:

``` bash
npm start
```

------------------------------------------------------------------------

## Tecnologías

-   Node.js
-   JavaScript (ES6)
-   CommonJS
-   Programación Orientada a Objetos

------------------------------------------------------------------------

## Justificación Académica

Este ejercicio demuestra dominio de:

-   Clases
-   Herencia
-   CRUD
-   Manejo de colecciones
-   Modularización en Node.js
