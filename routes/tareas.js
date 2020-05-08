const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

// crear una tarea
// api/tareas
router.post(
  "/",
  auth,
  [
    check("nombre", "El nombre es obligatiorio").not().isEmpty(),
    check("proyecto", "El proyecto es obligatorio").not().isEmpty(),
  ],
  tareaController.creaTarea
);

// obtener tareas por proyecto
router.get("/", auth, tareaController.obtenerTarea);

// actualizar tarea
router.put("/:id", auth, tareaController.actualizarTarea);

// eliminar tarea
router.delete("/:id", auth, tareaController.eliminarTarea);

module.exports = router;