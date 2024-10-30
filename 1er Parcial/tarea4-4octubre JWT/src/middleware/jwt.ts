import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

// Extender la interfaz Request para incluir la propiedad user
interface CustomRequest extends Request {
    user?: any; // Puedes especificar un tipo más específico si lo deseas
}

const prisma = new PrismaClient();
const secretKey = 'douglas';

export const jwtMiddleware = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Access denied. No token provided.' });
        return; // Finalizar la ejecución si no hay token
    }

    try {
        const decoded: any = jwt.verify(token, secretKey);
        const usuario = await prisma.usuario.findUnique({ where: { id: decoded.id } });

        if (!usuario || usuario.estado !== 'Activo') {
            res.status(403).json({ message: 'Token rejected. Inactive user.' });
            return; // Finalizar la ejecución si el usuario no es válido
        }

        req.user = decoded; // Almacenar el usuario en la solicitud
        next(); // Llamar a next() si todo es correcto
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
        return; // Finalizar la ejecución en caso de error
    }
};
