const express = require("express");
const conectarDB = require("./config/db");
const cors =require('cors');

// crear el servidor
const app = express();

// conectar a la base de datos
conectarDB();

// habilitar cors
app.use(cors());

// habilitar express.json
app.use(express.json({ extended: true }));

// puerto del app
const PORT = process.env.PORT || 4000; // puede ser cualquier puerto menos el 3000 para que no choquen

// importar rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/proyectos", require("./routes/proyectos"));
app.use("/api/tareas", require("./routes/tareas"));

// arrancar la app
app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});