const express = require("express");
const { generarTablasDeLoteria } = require("../controllers/tablas");

const router = express.Router();

router.get("/generar-tablas-loteria/:numTablas", async (req, res) => {
  const numTablas = parseInt(req.params.numTablas);
  if (isNaN(numTablas) || numTablas <= 0) {
    res.status(400).send("Número de tablas inválido");
    return;
  }

  try {
    const tablas = await generarTablasDeLoteria(numTablas);
    res.json(tablas);
  } catch (error) {
    console.error("Error al generar las tablas de lotería:", error);
    res.status(500).send("Error interno del servidor");
  }
});

module.exports = router;
