const express = require("express");
const cors = require("cors");
const loteriaRoutes = require("./routes/loteriaRoutes");
const connection = require("./db/database");
const { crearTablaYCartas } = require("./model/cartas");

const app = express();
const port = 3001;

app.use(cors());
app.use("/", loteriaRoutes);

connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión establecida correctamente");

  crearTablaYCartas();
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
