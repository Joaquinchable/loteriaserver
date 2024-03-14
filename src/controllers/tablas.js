const connection = require("../db/database");

async function obtenerCartasDisponibles() {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT id, nombre, imagen FROM cartas",
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        const cartas = results.map((row) => ({
          id: row.id,
          nombre: row.nombre,
          imagen: row.imagen,
        }));
        resolve(cartas);
      }
    );
  });
}

async function generarTablasDeLoteria(numTablas) {
  const tablas = [];

  let cartasDisponibles = await obtenerCartasDisponibles();

  if (cartasDisponibles.length < numTablas * 16) {
    throw new Error(
      "No hay suficientes cartas disponibles para generar las tablas."
    );
  }

  for (let i = 0; i < numTablas; i++) {
    const tabla = [];
    for (let j = i * 16; j < (i + 1) * 16; j++) {
      tabla.push(cartasDisponibles[j]);
    }
    tablas.push(tabla);
  }

  return tablas;
}

module.exports = {
  generarTablasDeLoteria,
};
