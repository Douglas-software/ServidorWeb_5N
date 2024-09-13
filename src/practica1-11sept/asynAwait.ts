import {aprendizajes} from './1.data'

async function getAprendizajeByIdaa(id:number)
{
    const aprendizaje = aprendizajes.find(e=> e.id===id);
    if (!aprendizaje)
    {
        const error = new Error();
        error.message="No encontramos el estudiante";
        throw error;
    }
    return aprendizaje;
}
export {
    getAprendizajeByIdaa,
}