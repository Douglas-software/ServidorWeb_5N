import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();
const router: Router = Router();

//localhost:3000/usuarioRoute

// GET all users
router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await prisma.usuario.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving users' });
    }
});

// GET a user by ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await prisma.usuario.findUnique({
            where: { id: Number(id) },
        });

        // if (!user) {
        //     return res.status(404).json({ error: 'Option not found' });
        // }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving user' });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, clave, estado } = req.body;
    try {
        const usuarioActualizado = await prisma.usuario.update({
            where: { id: Number(id) },
            data: {
                nombre,
                clave,
                estado,
            },
        });
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el usuario' });
    }
});


router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, clave, estado } = req.body;
    try {
        const usuarioActualizado = await prisma.usuario.update({
            where: { id: Number(id) },
            data: {
                nombre,
                clave,
                estado,
            },
        });
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el usuario' });
    }
});

// DELETE a user by ID
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.usuario.delete({
            where: { id: Number(id) },
        });
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
});


export default router;