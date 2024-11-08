import { Computer } from "../entities/computadores";
import { Router } from "express";
import {
  getAllComputers,
  getComputerById,
  createComputer,
  updateComputer,
  deleteComputer,
} from "../controllers/computerController"; // Importamos los métodos correspondientes a computadoras

const computerRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Computers
 *   description: CRUD relacionado con computadores
 */

/**
 * @swagger
 * /api/computers:
 *   get:
 *     summary: Obtener todos los computadores
 *     tags: [Computers]
 *     responses:
 *       200:
 *         description: Lista de computadores
 */
computerRoutes.get("/", getAllComputers);

/**
 * @swagger
 * /api/computers/{id}:
 *   get:
 *     summary: Obtener un computador por ID
 *     tags: [Computers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del computador
 *     responses:
 *       200:
 *         description: Detalles del computador
 *       404:
 *         description: Computador no encontrado
 */
computerRoutes.get("/:id", getComputerById);

/**
 * @swagger
 * /api/computers:
 *   post:
 *     summary: Crear un nuevo computador
 *     tags: [Computers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Computador creado
 *       500:
 *         description: Error en el servidor
 */
computerRoutes.post("/", createComputer);

/**
 * @swagger
 * /api/computers/{id}:
 *   put:
 *     summary: Actualizar un computador existente
 *     tags: [Computers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del computador
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Computador actualizado
 *       404:
 *         description: Computador no encontrado
 *       500:
 *         description: Error en el servidor
 */
computerRoutes.put("/:id", updateComputer);

/**
 * @swagger
 * /api/computers/{id}:
 *   delete:
 *     summary: Eliminar un computador
 *     tags: [Computers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del computador
 *     responses:
 *       200:
 *         description: Computador eliminado
 *       404:
 *         description: Computador no encontrado
 *       500:
 *         description: Error en el servidor
 */
computerRoutes.delete("/:id", deleteComputer);

export default computerRoutes;


