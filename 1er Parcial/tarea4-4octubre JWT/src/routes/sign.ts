import express, { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const router: Router = express.Router();
const prisma = new PrismaClient();
const secretKey = 'douglas';

// Route to register a new user and generate a JWT
router.post("/token", async (req:Request, res:Response) => {
    const { nombre, clave, estado } = req.body;

    // Validar que se reciban los campos necesarios
    // if (!nombre || !clave || !estado) {
    //     return res.status(400).json({ message: 'Nombre, clave y estado son requeridos' });
    // }

    try {
        // Hash the password
        const hashedPassword = bcrypt.hashSync(clave, 10);

        // Crear un nuevo usuario en la base de datos
        const usuario = await prisma.usuario.create({
            data: {
                nombre,
                clave: hashedPassword,
                estado,
            },
        });

        // Payload sin la contraseña hasheada
        const payload = { id: usuario.id, nombre: usuario.nombre, estado: usuario.estado };

        // Generar el token
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

        // Enviar el token como respuesta
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
});

export default router;
