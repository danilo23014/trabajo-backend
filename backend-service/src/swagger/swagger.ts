import swaggerJsdoc, { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Service API",
      version: "1.0.0",
      description: "API para Catálogo de Computadores y Gestión de Pedidos", // Actualizado para computadores
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  // Actualizamos para apuntar a las rutas de computadores en lugar de productos
  apis: ["./src/routes/computerRoutes.ts"], // Cambiado de productRoutes a computerRoutes
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
export default swaggerSpec;
