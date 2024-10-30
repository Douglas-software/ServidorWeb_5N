import { IAprendizaje, aprendizajes} from './1.data'

function getAprendizajeByIdUsingPromises(id:number):Promise<IAprendizaje>{
    return new Promise((resolve, reject) =>{
        const aprendizaje = aprendizajes.find(e=> e.id===id);
        if(!aprendizaje)
        {
            const error = new Error("Aprendizaje no encontrado");
            reject(error)
        }
        resolve(aprendizaje!)
    })

}

export{
    getAprendizajeByIdUsingPromises,
}

import { getAprendizajeByIdaa} from './asynAwait'

(async ()=>{
    try {
        const aprendizaje = await getAprendizajeByIdaa(1);
        console.log(aprendizaje)

    } catch (error) {
        console.log(error)
    }
    
})()