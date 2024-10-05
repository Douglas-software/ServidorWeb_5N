import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();
const router: Router = Router();

//localhost:3000/idiomaRoute

// Obtener todos los idiomas
router.get('/', async (req: Request, res: Response) => {
    try {
        const idiomas = await prisma.idioma.findMany();
        res.status(200).json(idiomas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los idiomas' });
    }
});

// Crear un nuevo idioma
router.post('/', async (req: Request, res: Response) => {
    const { descripcion } = req.body;
    try {
        const nuevoIdioma = await prisma.idioma.create({
            data: { descripcion },

        });
        res.status(200).json(nuevoIdioma);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el idioma' });
    }
});

// Actualizar un idioma
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { descripcion } = req.body;
    try {
        const idiomaActualizado = await prisma.idioma.update({
            where: { id: Number(id) },
            data: { descripcion },
        });
        res.status(200).json(idiomaActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el idioma' });
    }
});

// Eliminar un idioma
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.idioma.delete({
            where: { id: Number(id) },
        });
        res.status(204).send(); // Respuesta vacía para indicar que se eliminó correctamente
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar el idioma' });
    }
});

export default router;