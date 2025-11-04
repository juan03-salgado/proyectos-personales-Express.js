import express from 'express';
import proyectosRoutes from './routes/proyectosRoutes.js';
import cors from "cors"; 

const app = express();

app.use(cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use('/proyectos', proyectosRoutes);

app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000');
})