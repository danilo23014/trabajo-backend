import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Computer } from "../entities/computadores";
const computerRepository = AppDataSource.getRepository(Computer);

// GET - Obtener Todos los Computadores
export const getAllComputers = async (req: Request, res: Response) => {
  try {
    const computers = await computerRepository.find();
    res.json(computers);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener computadores." });
  }
};

// GET by ID - Obtener Computador por ID
export const getComputerById = async (req: Request, res: Response) => {
  try {
    const computer = await computerRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (computer) {
      res.json(computer);
    } else {
      res.status(404).json({ message: "Computador no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el computador." });
  }
};

// POST - Crear un nuevo Computador
export const createComputer = async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const computer = new Computer();
    computer.name = name;
    computer.description = description;
    computer.price = price;
    await computerRepository.save(computer);
    res.status(201).json(computer);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el computador." });
  }
};

// PUT - Actualizar un Computador existente
export const updateComputer = async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const computer = await computerRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (computer) {
      computer.name = name ?? computer.name;
      computer.description = description ?? computer.description;
      computer.price = price ?? computer.price;
      await computerRepository.save(computer);
      res.json(computer);
    } else {
      res.status(404).json({ message: "Computador no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el computador." });
  }
};

// DELETE - Borrar un Computador
export const deleteComputer = async (req: Request, res: Response) => {
  try {
    const computer = await computerRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (computer) {
      await computerRepository.remove(computer);
      res.json({ message: "Computador eliminado." });
    } else {
      res.status(404).json({ message: "Computador no encontrado." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el computador." });
  }
};
