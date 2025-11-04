import { Router } from "express";
import { obtenerProyectos, obtenerProyectoId, crearProyecto, actualizarProyecto, eliminarProyecto } from "../controllers/proyectos.js";

const router = Router();

router.get('/', obtenerProyectos);
router.get('/:id', obtenerProyectoId);
router.post('/', crearProyecto);
router.put('/:id', actualizarProyecto);
router.delete('/:id', eliminarProyecto);

export default router;