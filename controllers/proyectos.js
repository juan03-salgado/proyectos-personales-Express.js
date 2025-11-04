import db from "../db.js";
import { ObjectId } from "mongodb";
 
export const obtenerProyectos = async (req, res) => {
    try {
        const proyectos = await db.collection("proyectos").find().toArray();
        res.json(proyectos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los proyectos" });
    }
};

export const obtenerProyectoId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID no válido" });
    }

    const proyecto = await db.collection("proyectos").findOne({ _id: new ObjectId(id) });

    if (!proyecto) {
      return res.status(404).json({ message: "Proyecto no encontrado" });
    }
      
    res.json(proyecto);

  } catch (error) {
    res.status(500).json({ message: "Error al obtener el proyecto" });
  }
};

export const crearProyecto = async (req, res) => {
    try {
        const nuevoProyecto = await db.collection("proyectos").insertOne(req.body);
        res.json({message: "Proyecto creado correctamente", id: nuevoProyecto.insertedId});

    } catch (error) {
        res.status(500).json({ message: "Error al crear el proyecto", error});
    }
}

export const actualizarProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        delete req.body._id;
        const proyectoActualizado = await db.collection("proyectos").updateOne({_id: new ObjectId(id)}, {$set: req.body});
        res.json({message: "Proyecto actualizado correctamente", proyectoActualizado});

    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el proyecto", error});
    }
}

export const eliminarProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const proyectoEliminado = await db.collection("proyectos").deleteOne({_id: new ObjectId(id)});
        res.json({message: "Proyecto eliminado correctamente", proyectoEliminado});

    } catch (error) {
         res.status(500).json({ message: "Error al eliminar el proyecto" }, error);
    }
}


