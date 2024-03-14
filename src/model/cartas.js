const connection = require("../db/database");

function crearTablaYCartas() {
  const crearTablaSql = `
   CREATE TABLE IF NOT EXISTS cartas (
    id INT AUTO_INCREMENT PRIMARY KEY,
     nombre VARCHAR(255) NOT NULL,
     imagen VARCHAR(255) NOT NULL
 );

   `;

  connection.query(crearTablaSql, (error, results) => {
    if (error) {
      console.error("Error al crear la tabla de cartas:", error);
      connection.end();
      return;
    }

    console.log("Tabla de cartas creada exitosamente");

    const nombresCartas = [
      "gallito",
      "diablito",
      "dama",
      "catrin",
      "paraguas",
      "sirena",
      "escalera",
      "botella",
      "barril",
      "arbol",
      "melon",
      "valiente",
      "gorrito",
      "muerte",
      "pera",
      "bandera",
      "bandolon",
      "violoncello",
      "garza",
      "pajaro",
      "mano",
      "bota",
      "luna",
      "cotorro",
      "borracho",
      "negrito",
      "corazon",
      "sandia",
      "tambor",
      "camaron",
      "jaras",
      "musico",
      "araña",
      "soldado",
      "estrella",
      "cazo",
      "mundo",
      "apache",
      "nopal",
      "alacran",
      "rosa",
      "calavera",
      "campana",
      "cantarito",
      "venado",
      "sol",
      "corona",
      "chalupa",
      "pino",
      "pescado",
      "palma",
      "maceta",
      "arpa",
      "rana",
    ];

    const inserts = nombresCartas.map((nombre) => {
      return [nombre, `${nombre}.jpeg`];
    });

    const insertarCartasSql = "INSERT INTO cartas (nombre, imagen) VALUES ?";
    connection.query(insertarCartasSql, [inserts], (error, results) => {
      if (error) {
        console.error("Error al insertar las cartas:", error);
        return;
      }

      console.log("Cartas insertadas exitosamente");
    });
  });
}

module.exports = { crearTablaYCartas };
