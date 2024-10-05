import request from 'supertest';
import express from 'express';
import usuarioRouter from './usuarioRoute'; // Cambia esto según la ubicación real de tu router

describe('usuarioRoute router', () => {
    const app = express();
    app.use(express.json()); // Asegúrate de que se pueda procesar el JSON
    app.use('/usuarioRoute', usuarioRouter);

    it('should return all users', async () => {
        const res = await request(app).get('/usuarioRoute');
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                nombre: expect.any(String),
                clave: expect.any(String),
                estado: expect.any(String),
            }),
        ]));
    });

    it('should return user with a specific id', async () => {
        const res = await request(app).get('/usuarioRoute/1'); // Asegúrate de que este ID exista en tu base de datos
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.objectContaining({
            id: 1,
            nombre: expect.any(String), // Ajusta esto si conoces el nombre esperado
            clave: expect.any(String),  // Ajusta esto si conoces la clave esperada
            estado: expect.any(String), // Ajusta esto si conoces el estado esperado
        }));
    });

    it('should return 404 for non-existing user id', async () => {
        const res = await request(app).get('/usuarioRoute/999'); // Cambia este ID a uno que no exista
        expect(res.status).toBe(404);
        expect(res.text).toBe('Option not found'); // Asegúrate de que tu lógica devuelva este mensaje
    });
});
