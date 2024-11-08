import express, { Application } from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import computerRoutes from "./routes/computerRoutes"; // Actualizamos para usar las rutas de computadores
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger"; // Swagger con la documentación

const app: Application = express();
const PORT = process.env.PORT ?? 3000;

// Middleware - Guardianes de ruta
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/computers", computerRoutes); // Actualizamos el endpoint a /computers

// Documentación Swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Inicialización de la base de datos y el servidor
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}\n`);
      console.log(`Endpoints:`);
      console.log(`API Computers http://localhost:${PORT}/api/computers`); // Actualizamos la ruta
      console.log(`Documentación:`);
      console.log(`Swagger en http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((error) => console.log(error));
