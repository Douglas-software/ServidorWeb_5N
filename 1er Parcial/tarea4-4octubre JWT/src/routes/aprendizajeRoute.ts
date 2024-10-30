import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();
const router: Router = Router();

//localhost:3000/aprendizajeRoute

// Obtener todos los registros de aprendizaje
router.get('/', async (req: Request, res: Response) => {
    const aprendizajes = await prisma.aprendizaje.findMany();
    res.json(aprendizajes);
});

// Crear un nuevo registro de aprendizaje
router.post('/', async (req: Request, res: Response) => {
    const { idiomaId, instructorId, fecha, hora, numeroHoras, nivel } = req.body;
    const nuevoAprendizaje = await prisma.aprendizaje.create({
        data: {
            idiomaId,
            instructorId,
            fecha,
            hora,
            numeroHoras,
            nivel,
        },
    });
    res.json(nuevoAprendizaje);
});

// Actualizar un registro de aprendizaje
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { idiomaId, instructorId, fecha, hora, numeroHoras, nivel } = req.body;
    const aprendizajeActualizado = await prisma.aprendizaje.update({
        where: { id: Number(id) },
        data: {
            idiomaId,
            instructorId,
            fecha,
            hora,
            numeroHoras,
            nivel,
        },
    });
    res.json(aprendizajeActualizado);
});

// Eliminar un registro de aprendizaje
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.aprendizaje.delete({
        where: { id: Number(id) },
    });
    res.status(204).send(); // Respuesta vacía para indicar que se eliminó correctamente
});

export default router;