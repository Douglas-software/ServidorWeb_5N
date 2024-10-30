import { ICiudad, IEstudiante, IColegio, estudiantes, colegios, ciudades} from './data'

function getEstudiantesByIdUsingPromises(id:number):Promise<IEstudiante>{
    return new Promise((resolve, reject) =>{
        const estudiante = estudiantes.find(e=> e.id===id);
        if(!estudiante)
        {
            const error = new Error("Estudiante no encontrado");
            reject(error)
        }
        resolve(estudiante!)
    })

}

function getColegioByIdUsingPromises(id:number):Promise<IColegio>{
    return new Promise((resolve, reject) =>{
        const colegio = colegios.find(e=> e.id===id);
        if(!colegio)
        {
            const error = new Error("Colegio no encontrado");
            reject(error)
        }
        resolve(colegio!)
    })

}


function getCiudadesByIdUsingPromises(id:number):Promise<ICiudad>{
    return new Promise((resolve, reject) =>{
        const ciudad = ciudades.find(e=> e.id===id);
        if(!ciudad)
        {
            const error = new Error("Ciudad no encontrada");
            reject(error)
        }
        resolve(ciudad!)
    })

}

export{
    getEstudiantesByIdUsingPromises,
    getCiudadesByIdUsingPromises,
    getColegioByIdUsingPromises
}

import { getColegioByIdaa, getEstudianteByIdaa} from './asyncAwait'

(async ()=>{
    try {
        const estudiante = await getEstudianteByIdaa(1);
        const colegio = await getColegioByIdaa(estudiante.colegioId);
        console.log(estudiante, colegio)

    } catch (error) {
        console.log(error)
    }
    
})()