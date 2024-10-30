import express, { Request, Response } from 'express';
const app = express();
app.use(express.json());

// Método GET
app.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.send(`Obteniendo recurso con ID: ${id}`);
});

// Método POST
app.post('/:id', (req: Request, res: Response) => {
    const { data } = req.body;
    res.send(`Creando recurso con los datos: ${JSON.stringify(data)}`);
});

// Método PUT
app.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { data } = req.body;
    res.send(`Actualizando recurso con ID: ${id} con los datos: ${JSON.stringify(data)}`);
});

// Método DELETE
app.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.send(`Eliminando recurso con ID: ${id}`);
});

// // Inicializando el servidor
// app.listen(3000, () => {
//     console.log('Servidor corriendo en puerto 3000');
// });
