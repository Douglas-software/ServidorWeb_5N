import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();
const router: Router = Router();

//localhost:3000/instructorRoute

// Obtener todos los instructores
router.get('/', async (req: Request, res: Response) => {
    const instructores = await prisma.instructor.findMany();
    res.json(instructores);
});

// // Obtener un instructor por ID
// router.get('/instructores/:id', async (req: Request, res: Response) => {
//     const { id } = req.params;
//     try {
//       const instructor = await prisma.instructor.findUnique({
//         where: { id: Number(id) },
//       });
//       if (!instructor) {
//         return res.status(404).json({ error: 'Instructor no encontrado' });
//       }
//       res.json(instructor);
//     } catch (error) {
//       res.status(500).json({ error: 'Error al obtener el instructor' });
//     }
//   });

// Crear un nuevo instructor
router.post('/', async (req: Request, res: Response) => {
    const { nombre, fechaNacimiento, experiencia } = req.body;
    const nuevoInstructor = await prisma.instructor.create({
        data: { nombre, fechaNacimiento, experiencia },
    });
    res.json(nuevoInstructor);
});

// Actualizar un instructor
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, fechaNacimiento, experiencia } = req.body;
    const instructorActualizado = await prisma.instructor.update({
        where: { id: Number(id) },
        data: { nombre, fechaNacimiento, experiencia },
    });
    res.json(instructorActualizado);
});

// Eliminar un instructor
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.instructor.delete({
        where: { id: Number(id) },
    });
    res.status(204).send(); // Respuesta vacía para indicar que se eliminó correctamente
});

export default router;